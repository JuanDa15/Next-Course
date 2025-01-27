import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  await prisma.todo.deleteMany({})

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: "Learn Prisma",
        title: "Prisma",
      },
      {
        description: "Learn Next.js",
        title: "Next.js",
        done: true
      },
      {
        description: "Learn React",
        title: "React",
      },
    ]
  })

  return NextResponse.json({ message: "Seeder executed !!", data: todo });
}