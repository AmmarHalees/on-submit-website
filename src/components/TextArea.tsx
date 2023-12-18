// Input.tsx

export default function TextArea({
  label,
  value,
  onChange,
  name,
  placeholder,
  isInvalid,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
  isInvalid?: boolean;
}) {
  return (
    <legend>
      <label htmlFor={name} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <textarea
        readOnly
        className={`w-full p-2 border ${
          isInvalid ? "border-red-400" : "border-gray-200"
        }   rounded-md`}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
      />
    </legend>
  );
}
