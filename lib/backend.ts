"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
interface SignUpProps {
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  domainName?: string;
  accountNumber?: string;
  ifscCode?: string;
  Address?: string;
}

export async function signUpUser(props: SignUpProps) {
  try {
    const response = await prisma.client.create({
      data: {
        username: props.username,
        phoneNumber: props.phoneNumber,
        email: props.email,
        password: props.password,
      },
    });
    if (response) {
      return {
        message: "User Created Successfully",
        action: true,
      };
    } else {
      return {
        message: "Something Went Wrong",
        action: false,
      };
    }
  } catch {
    return {
      message: "Username Already Exist",
      action: false,
    };
  }
}
interface SignInProps {
  username?: string;
  email?: string;
  password: string;
}
export async function SignInUser(props: SignInProps) {
  try {
    let response;
    if (props.username) {
      response = await prisma.client.findUnique({
        where: {
          username: props.username,
          password: props.password,
        },
      });
    } else if (props.email) {
      response = await prisma.client.findUnique({
        where: {
          username: props.email,
          password: props.password,
        },
      });
    }
    if (response) {
      return {
        message: "User Found",
        action: true,
      };
    } else {
      return {
        message: "User not Found",
        action: false,
      };
    }
  } catch (error) {
    return {
      message: "Something Went Wrong",
      action: false,
    };
  }
}
