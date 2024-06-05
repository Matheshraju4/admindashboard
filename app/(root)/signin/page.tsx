"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Signin() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="flex justify-center w-full items-center mt-20  p-5">
        <div className="max-w-lg w-full ">
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <Card className="bg-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-center text-4xl text-bold">
                  SignIn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <FormFields form={form} name="email" label="Email" />
                <FormFields form={form} name="password" label="Password" />
              </CardContent>
              <CardFooter className="flex justify-center flex-col">
                <Button type="submit" className="w-full">
                  Submit
                </Button>
                <CardDescription className="text-center mt-3 text-md">
                  Don't Have an Account?
                  <a href="/signup" className=" pl-2  underline">
                    Signup
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
