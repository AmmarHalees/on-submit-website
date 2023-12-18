// ImageUpload.tsx
import styles from "./ImageUpload.module.css";

export default function ImageUpload({
  label,
  value,
  onChange,
  name,
  isInvalid,
  errorMessage,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  isInvalid?: boolean;
  errorMessage?: string;
}) {
  return (
    <div tabIndex={0}>
      <label className={styles.customFileUpload}>
        <input
          name={name}
          onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
            const element = event.target as HTMLInputElement;
            element.value = "";
          }}
          accept="image/*"
          type="file"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-edit-2"
        >
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>{" "}
      </label>
      {isInvalid && <p className="text-xs mt-1 text-red-400">{errorMessage}</p>}
    </div>
  );
}
