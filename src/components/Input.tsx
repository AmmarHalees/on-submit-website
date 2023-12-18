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
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
  isInvalid?: boolean;
  errorMessage?: string;
}) {
  return (
    <legend>
      <label htmlFor={name} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        className={`w-full p-2 border ${
          isInvalid ? "border-red-400" : "border-gray-200"
        }   rounded-md`}
        type={type}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
      />
      {isInvalid && <p className="text-xs mt-1 text-red-400">{errorMessage}</p>}
    </legend>
  );
}
