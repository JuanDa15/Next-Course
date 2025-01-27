import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const take = searchParams.get('take') ?? '10'
  const skip = searchParams.get('skip') ?? '0'

  if (isNaN(+take)) {
    return NextResponse.json({ message: `Take ${take} should be a valid value` }, { status: 400 });
  }

  if (isNaN(+skip)) {
    return NextResponse.json({ message: `Skip ${skip} should be a valid value` }, { status: 400 });
  }

  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip
  })
  return NextResponse.json({ data: todos });
}
const postSchema = object({
  title: string().required('Title is required'),
  description: string().required('Description is required'),
  done: boolean().optional().default(false)
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    let validatedBody = await postSchema.validate(body, { abortEarly: false, stripUnknown: true });

    try {
      const todo = await prisma.todo.create({
        data: validatedBody
      });

      return NextResponse.json({
        data: todo,
        message: "Todo created successfully"
      });
    } catch (error) {
      return NextResponse.json({ message: 'Error creating todo' }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ message: (error as any).errors }, { status: 400 });
  }
}