"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TypographyDemo() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-tr from-indigo-400 via-blue-50 to-blue-400">
      <div className="flex flex-row-reverse gap-5 pt-5 pr-5">
        <Button
          onClick={() => router.push("/signup")}
          className=" text-xl font-bold text-slate-600 opacity-90 p-3 bg-slate-100 hover:bg-green-600 hover:text-white"
        >
          Signup
        </Button>
        <Button
          onClick={() => router.push("/signin")}
          className="text-xl font-bold text-slate-600 opacity-90 p-3 bg-slate-100  hover:bg-blue-700  hover:text-white"
        >
          Signin
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className=" text-4xl font-extrabold tracking-tight lg:text-8xl">
          Welcome to Nextjs Projects
        </h1>
        <h3 className="text-2xl font-extrabold tracking-tight lg:text-3xl p-5 text-slate-600 ">
          Let us Bring you online in minutes
        </h3>
        <div className="flex gap-5">
          <Button className="text-md">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
