'use server'

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { boolean, object, string } from "yup";

export const toggleTodoAction = async (id: string, newValue: Todo) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: id
    }
  })

  if (!todo) {
    throw new Error('Todo not found')
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      ...newValue
    }
  })
  revalidatePath('/server-actions')
  return updatedTodo;
}

export const deleteTodoAction = async (id: string) => {

  const todo = await prisma.todo.findUnique({
    where: {
      id: id
    }
  })

  if (!todo) {
    throw new Error('Todo not found')
  }

  await prisma.todo.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/server-actions')
}

const postSchema = object({
  title: string().required('Title is required'),
  description: string().required('Description is required'),
  done: boolean().optional().default(false),
  userId: string().required('User is required')
});
export const createTodoAction = async (body: { title: string, description: string, userId: string }) => {
  try {
    const validatedBody = await postSchema.validate(body, { abortEarly: false, stripUnknown: true });

    try {
      const todo = await prisma.todo.create({
        data: { ...validatedBody }
      });
      revalidatePath('/server-actions')
      return todo
    } catch {
      throw new Error('Error creating todo');
    }
  } catch (error) {
    throw new Error((error as any).errors);
  }
}

export const deleteCompletedTodos = async (id: string) => {


  await prisma.todo.deleteMany({
    where: {
      done: true,
      userId: id
    }
  });
  revalidatePath('/server-actions')
}