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
            ${className}
            p-2
            rounded-md
            bg-black
            text-white
            `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
