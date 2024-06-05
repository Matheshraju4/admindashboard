"use client";

import React from "react";

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
import FormFields from "./FormFields";
import { Textarea } from "./ui/textarea";
import { error } from "console";

const formSchema = z.object({
  banner: z.string().min(2, {
    message: "Banner must be at least 2 characters.",
  }),
  heading: z.string().min(2, {
    message: "Heading must be at least 2 characters.",
  }),
  subHeading: z.string().min(2, {
    message: "SubHeading must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  workshopdate: z.string().min(2, {
    message: "Workshop must be at least 2 characters.",
  }),
  videoUrl: z.string().min(2, {
    message: "Please reupload your video.",
  }),
  buttonContent: z.string().min(2, {
    message: "Button must be at least 2 characters.",
  }),
  cardSection: z.string().min(2, {
    message: "Card Section must be at least 2 characters.",
  }),
});

export function Webinarform() {
  // ...  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      banner: "",
      heading: "",
      subHeading: "",
      description: "",
      workshopdate: "",
      videoUrl: "",
      buttonContent: "",
      cardSection: "",
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
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) =>
          console.log("validation error", errors)
        )}
        className="space-y-8"
      >
        <FormFields
          name="banner"
          label="Banner content"
          form={form}
          placeholder="Super Charge your Webinar"
          description="This content will be displayed in the banner"
        />{" "}
        <FormFields
          name="heading"
          label="Heading"
          form={form}
          placeholder="Launch Your First or Next"
          description="This content will be displayed in the heading section"
        />
        <FormFields
          name="subHeading"
          label="SubHeading"
          form={form}
          placeholder="HIGH CONVERTING FUNNELTo Get Clients Every Single Day... On Complete Automation In 2024"
          description="This content will be displayed in the subheading section"
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Like 9128+ previous participants In The Next 3 Hours Using Free AI Tools That Brings Customers For Your Business Every Single Day even if you are building for the first time with help of free tools"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Explain in details what your webinar is about
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormFields
          name="workshopdate"
          label="Workshop date"
          form={form}
          placeholder="10-12-2022"
          description="This content will be displayed in the date section"
        />
        <FormFields
          name="videoUrl"
          label="Video Url"
          form={form}
          placeholder="https://www.youtube.com/watch?v=JGwWbJbqHl8"
          description="This content will be displayed in the video section"
        />
        <FormFields
          name="buttonContent"
          label="Button"
          form={form}
          placeholder="Join Now"
          description="This content will be displayed in the button"
        />
        <FormFields
          name="cardSection"
          label="Card Section"
          form={form}
          placeholder="https://www.youtube.com/watch?v=JGwWbJbqHl8"
          description="This content will be displayed in the video section"
        />
        <div className="flex justify-end pr-20">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

export default Webinarform;
