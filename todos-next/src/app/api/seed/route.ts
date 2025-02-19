import prisma from "@/lib/prisma";
import { hashSync } from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  await prisma.todo.deleteMany({})
  await prisma.user.deleteMany({})

  const user = await prisma.user.create({
    data: {
      email: "test1@yopmail.com",
      name: "Test User",
      password: hashSync("12345678", 10),
      todos: {
        create: [
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
      }
    }
  })

  return NextResponse.json({ message: "Seeder executed !!", data: user });
}