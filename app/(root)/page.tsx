"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TypographyDemo() {
  const router = useRouter();
  return (
    <div className="h-3/4">
      <div className="flex  items-end justify-end p-4 md:h-20 ">
        <Button className="text-md">Get Started</Button>
      </div>
      <div className="flex flex-col items-center justify-center  h-1/2 md:h-full ">
        <h1 className=" text-4xl font-extrabold text-center tracking-tight lg:text-8xl">
          Welcome to Nextjs Projects
        </h1>
        <h3 className="text-xl font-extrabold tracking-tight lg:text-3xl p-5 text-slate-600 text-center">
          Let us Bring you online in minutes
        </h3>

        <div className="flex flex-row-reverse gap-5 pt-5 pr-5">
          <Button
            onClick={() => router.push("/signup")}
            className=" text-md font-thin text-white w-full bg-blue-700 hover:bg-blue-800 p-6 border border-slate-300 shadow-md md:text-xl md:px-10"
          >
            Signup
          </Button>
          <Button
            onClick={() => router.push("/signin")}
            className=" text-md font-thin text-white w-full bg-green-600 hover:bg-green-700 p-6 border border-slate-300 shadow-md md:text-xl md:px-10"
          >
            Signin
          </Button>
        </div>
      </div>
    </div>
  );
}
