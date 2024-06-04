import React from "react";
import { FormField } from "./ui/form";
import { InputWithLabel } from "./InputBox";

interface Formfields {
  form: any;
  name: string;
  label: string;
}
const FormFields = ({ form, name, label }: Formfields) => {
  const placeholder = label[0].toUpperCase() + label.slice(1);
  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }: any) => (
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
        )}
      />
    </div>
  );
};

export default FormFields;
