"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  userInput: z.string().min(2, {
    message: "Text must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userInput: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("confirm");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 my-4">
        <FormField
          control={form.control}
          name="userInput"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What's wrong with your code?</FormLabel>

              <FormControl className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Quack Quack" {...field} />
              </FormControl>

              <FormDescription>
                Tell the duck, whats wrong with your code.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Ask the duck</Button>
      </form>
    </Form>
  );
}
