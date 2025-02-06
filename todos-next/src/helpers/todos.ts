import { Todo } from "@prisma/client";

export const updateTodo = async (id: string, todo: Todo): Promise<{ data: Todo, message: string }> => {
  const body = { ...todo };

  const resp = await fetch(`/api/todo/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return resp
}

export const createTodo = async (body: {
  title: string,
  description: string
}): Promise<{ data: Todo, message: string }> => {
  const resp = await fetch(`/api/todo`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return resp
}

export const deleteCompletedTodos = async (): Promise<{ message: string }> => {
  const resp = await fetch(`/api/todo`, {
    method: 'DELETE'
  }).then(res => res.json());
  return resp
}

export const deleteTodo = async (id: string): Promise<{ message: string }> => {
  const resp = await fetch(`/api/todo/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
  return resp
}