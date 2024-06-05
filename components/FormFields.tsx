import React from "react";
import { FormDescription, FormField, FormMessage } from "./ui/form";
import { InputWithLabel } from "./InputBox";

interface Formfields {
  form: any;
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
}
const FormFields = ({
  form,
  name,
  label,
  description,
  placeholder,
}: Formfields) => {
  if (placeholder) {
    placeholder = placeholder;
  } else {
    placeholder = label[0].toUpperCase() + label.slice(1);
  }

  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }: any) => (
          <>
            <InputWithLabel
              type={
                name !== "password" && name !== "confirmPassword"
                  ? "text"
                  : "password"
              }
              onChange={field.onChange}
              label={label}
              placeholder={placeholder}
            />
            <FormDescription className="pl-2 pt-2">
              {description}
              <FormMessage />
            </FormDescription>
          </>
        )}
      />
    </div>
  );
};

export default FormFields;
