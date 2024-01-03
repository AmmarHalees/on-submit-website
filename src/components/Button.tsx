// Button.tsx

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={`
      ${variant === "primary" ? "bg-[#635bff]" : "bg-none"} 
            ${className}
            p-2
            rounded-md

            ${
              variant === "primary"
                ? ""
                : "border border-gray-300 hover:border-gray-400"
            }

           ${
             variant === "primary"
               ? "text-white hover:bg-[#5945fa]"
               : "text-gray-600 hover:bg-gray-50"
           }
            `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
