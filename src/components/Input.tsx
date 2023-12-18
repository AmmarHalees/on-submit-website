// Input.tsx

export default function Input({
  label,
  value,
  onChange,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label htmlFor={name}>
      <input
        className="w-full p-2 border border-gray-300 rounded-md"
        type={type}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
      />
    </label>
  );
}