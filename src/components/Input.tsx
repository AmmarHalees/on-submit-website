// Input.tsx

export default function Input({
  label,
  value,
  onChange,
  name,
  type = "text",
  placeholder,
  isInvalid,
  errorMessage,
  classes,
}: {
  label: string;
  value?: string;
  name: string;
  type?: string;
  placeholder?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
}) {
  return (
    <legend>
      <label htmlFor={name} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        className={`w-full p-2 border ${
          isInvalid ? "border-red-400" : "border-gray-200"
        }  ${classes} rounded-md`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {isInvalid && <p className="text-xs mt-1 text-red-400">{errorMessage}</p>}
    </legend>
  );
}
