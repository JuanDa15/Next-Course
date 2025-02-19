import prisma from "@/lib/prisma"
import { compareSync, hashSync } from "bcrypt"
export const checkUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return await createUser(email, password)
  }

  return user
}


export const createUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashSync(password, 10),
        name: email.split("@")[0],
      }
    })
    return user
  } catch (error) {
    console.log(error)
    throw new Error("Error creating user")
  }
}

export const comparePassword = async (password: string, passwordDB) => {
  const match = compareSync(password, passwordDB ?? '')
  return match
}