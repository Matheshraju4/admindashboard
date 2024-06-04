import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  label,
  placeholder,
  onChange,
  type,
}: {
  type: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor={type} className="md:text-lg font-extrabold">
        {label}
      </Label>
      <Input
        className="text-md text-slate-700 border-slate-400"
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
