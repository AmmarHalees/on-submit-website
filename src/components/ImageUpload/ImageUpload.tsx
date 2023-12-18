// ImageUpload.tsx
import Image from "next/image";
import styles from "./ImageUpload.module.css";
import React from "react";

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
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <div className="relative mb-4">
      <div tabIndex={0}>
        <label
          className={styles.customFileUpload}
          style={{
            backgroundImage: `url(${
              files.length > 0 ? URL.createObjectURL(files[0]) : ""
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <input
            name={name}
            onClick={(
              event: React.MouseEvent<HTMLInputElement, MouseEvent>
            ) => {
              const element = event.target as HTMLInputElement;
              element.value = "";
            }}
            accept="image/*"
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files?.[0];
              if (file) {
                setFiles([file]);
              }
            }}
          />
          {files.length === 0 ? (
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
            </svg>
          ) : null}
        </label>
        {isInvalid && (
          <p className="text-xs mt-1 text-red-400">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
