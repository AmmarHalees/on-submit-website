// Button.tsx

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  return (
    <button
      className={`
      bg-[#635bff]
            ${className}
            p-2
            rounded-md

            text-white
            `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
