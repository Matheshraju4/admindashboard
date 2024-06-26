"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputWithLabel } from "@/components/InputBox";
import FormFields from "@/components/FormFields";
import { signUpUser } from "@/lib/backend";
import { useState } from "react";
import { table } from "console";
import LoadingComponent from "@/components/LoadingComponent";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export default function ProfileForm() {
  const [loading, setloading] = useState(false);
  // 1. Define your form.
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setloading(true);
    if (values.confirmPassword === values.password) {
      const { username, password, phone, email } = values;
      const response = await signUpUser({
        username,
        phoneNumber: phone,
        email,
        password,
      });
      if (response.action === true) {
        toast({
          title: response.message,
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
        setloading(false);
      } else if (
        response.action === false &&
        response.message === "Username Already Exist"
      ) {
        toast({
          title: response.message,
          description: "Create with unique username",
        });
        setloading(false);
      }
    } else {
      toast({
        title: "Both password and Confrim Password are not same",
      });
      setloading(false);
    }

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="flex justify-center w-full items-center md:min-h-screen p-5">
        <div className="max-w-lg w-full ">
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <Card className="border-slate-400 border-2 ">
              <CardHeader>
                <CardTitle className="text-center text-3xl md:text-5xl text-bold">
                  SignUp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 ">
                <FormFields form={form} name="email" label="Email" />
                <FormFields form={form} name="phone" label="Phone" />
                <FormFields form={form} name="username" label="Username" />

                <FormFields form={form} name="password" label="Password" />
                <FormFields
                  form={form}
                  name="confirmPassword"
                  label="Confirm Password"
                />
              </CardContent>
              <CardFooter className="flex justify-center flex-col">
                <Button type="submit" className="w-full">
                  {loading ? <LoadingComponent /> : "Submit"}
                </Button>
                <CardDescription className="text-center mt-3 text-md">
                  Already Have an Account?
                  <a href="/signin" className=" pl-2  underline">
                    Signin
                  </a>
                </CardDescription>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </Form>
  );
}
