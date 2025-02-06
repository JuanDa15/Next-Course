import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
  params: Promise<{ id: string }>;
}
export async function GET(request: NextRequest, segments: Segments) {
  const { id } = await segments.params;

  if (!id) {
    return NextResponse.json({ message: "Id is required" }, { status: 400 });
  }

  try {
    const todo = await prisma.todo.findUnique({
      where: { id }
    })

    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({
      data: todo,
      message: "Ok"
    })
  } catch (error) {
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

const putSchema = object({
  title: string().required(),
  description: string().required(),
  done: boolean().required()
})
export async function PUT(request: NextRequest, segments: Segments) {
  const { id } = await segments.params;

  if (!id) {
    return NextResponse.json({ message: "Id is required" }, { status: 400 });
  }

  const todo = await prisma.todo.findUnique({
    where: { id }
  })

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  const body = await request.json();

  try {
    const validatedBody = await putSchema.validate(body, { abortEarly: false, stripUnknown: true });

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        ...validatedBody,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({
      data: updatedTodo,
      message: "Todo updated successfully"
    })
  } catch (error) {
    return NextResponse.json({ message: (error as any).errors }, { status: 400 });
  }

}

export async function DELETE(request: NextRequest, segments: Segments) {
  const { id } = await segments.params;

  console.log(id);
  const todo = await prisma.todo.findUnique({
    where: { id }
  })

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  try {
    await prisma.todo.delete({
      where: { id }
    })

    return NextResponse.json({
      message: "Todo deleted successfully"
    })
  } catch (error) {
    return NextResponse.json({ message: (error as any).errors }, { status: 400 });
  }
}