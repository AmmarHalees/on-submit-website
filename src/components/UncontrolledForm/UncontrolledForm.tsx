// UncontrolledForm
"use client";
import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import TextArea from "../TextArea";
import Select from "../Select";
import { validateField, validateForm } from "onsubmit";
import initialRules from "./rules";
import { useDebouncedCallback } from "use-debounce";
import { FieldError, NameRuleMap } from "onsubmit/types";
import Image from "next/image";

const devModeClasses = `
grid gap-4 md:grid-cols-2 
max-w-4xl
`;

export default function UncontrolledForm() {
  const [errors, setErrors] = React.useState<Array<FieldError>>([]);
  const [isDevMode, setIsDevMode] = React.useState(true);
  const [currentRules, setCurrentRules] = useState<NameRuleMap>(initialRules);
  const [jsonError, setJsonError] = useState(false);

  function reviveRegex(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "string" && obj[key].startsWith("/")) {
        const match = obj[key].match(/^\/(.+)\/([gimuy]*)$/);
        if (match) {
          obj[key] = new RegExp(match[1], match[2]);
        }
      } else if (typeof obj[key] === "object") {
        reviveRegex(obj[key]);
      }
    }
  }

  const handleChange = (e) => {
    try {
      const parsed = JSON.parse(e.target.value);
      reviveRegex(parsed); // Convert string representations back to RegExp
      setCurrentRules(parsed);
      setJsonError(false);
    } catch (error) {
      setJsonError(true);
    }
  };

  console.log(currentRules);

  // for form-level validation
  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const errors = validateForm(data, currentRules);
    setErrors(errors);
  };

  // for per-field validation
  const handleOnchange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const errors = validateField(value, name, currentRules[name]);

      setErrors((prev) => prev.filter((x) => x.name !== name).concat(errors));
    },
    300
  );

  const getInputParams = (name = "firstName", type = "text") => ({
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleOnchange(e);
    },
    isInvalid: !!errors.find((x) => x.name === name),
    errorMessage: errors.find((x) => x.name === name)?.message,
    name,
    type,
  });

  return (
    <div>
      <div
        className="p-4 grid 
      gap-4
      grid-cols-2
      items-center
      justify-between
      w-full
      max-w-md
      mx-auto
      mb-2
      mt-2
      bg-gray-50
      rounded-md
      shadow-md
      "
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={(e) => {
              setIsDevMode(e.target.checked);
            }}
            type="checkbox"
            value=""
            checked={isDevMode}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
          <span className="ms-3 text-sm font-medium ">
            {isDevMode ? "Dev mode" : "Preview mode"}
          </span>
        </label>

        <a
          className="block  justify-self-end"
          target="_blank"
          href="https://github.com/AmmarHalees/onsubmit"
        >
          <Image
            src="/static/github.svg"
            alt="profile"
            className="rounded-full"
            width={30}
            height={30}
          />
        </a>
      </div>
      <div
        className={`
      p-2
      md:p-4
      mx-auto 
      bg-gray-50
      rounded-md
      shadow-md
      mt-0  
      transition-all

      ${isDevMode ? devModeClasses : "max-w-md"}
  
      `}
      >
        <form
          className="
      grid 
      gap-4
      "
          onSubmit={handleOnsubmit}
        >
          <fieldset className="grid gap-2 p-4">
            {/* <ImageUpload label="Click here to upload" name="profilePicture" /> */}

            <legend className="text-lg font-semibold text-gray-600">
              Personal Info
            </legend>
            <div className="grid gap-2 md:grid-cols-2">
              <Input label="First Name*" {...getInputParams("firstName")} />
              <Input label="Last Name*" {...getInputParams("lastName")} />
            </div>
            <Input
              label="Portfolio"
              placeholder="ex: https://clay.dev"
              {...getInputParams("portfolio", "url")}
            />
            <TextArea label="Bio" name="bio" />
          </fieldset>
          <fieldset className="grid gap-2 p-4">
            <legend className="text-lg font-semibold text-gray-600">
              Contact Info
            </legend>
            <Input
              label="Phone number"
              placeholder="ex:"
              {...getInputParams("phoneNumber", "tell")}
            />
            <Input
              label="Corporate email*"
              placeholder="ex: clay@whisker.com"
              {...getInputParams("email", "email")}
            />
          </fieldset>
          <fieldset className="grid gap-2 p-4">
            <legend className="text-lg font-semibold text-gray-600">
              Work-related Info
            </legend>

            <div className="grid gap-2 md:grid-cols-2">
              <Input
                label="Start hour"
                name="startHour"
                type="time"
                isInvalid={!!errors.find((x) => x.name === "startHour")}
                errorMessage={
                  errors.find((x) => x.name === "startHour")?.message
                }
                onChange={(e) => {
                  handleOnchange(e);
                }}
              />
              <Input
                label="End hour"
                name="endHour"
                type="time"
                isInvalid={!!errors.find((x) => x.name === "endHour")}
                errorMessage={errors.find((x) => x.name === "endHour")?.message}
                onChange={(e) => {
                  handleOnchange(e);
                }}
              />
            </div>

            <Select label="Speciality" name="speciality" />
          </fieldset>
          {/* <fieldset className="grid gap-2 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Privacy
          </legend>

          <Input
            label="Public profile"
            name="isPublicProfile"
            type="checkbox"
            classes="mt-2 block w-fit"
            isInvalid={!!errors.find((x) => x.name === "isPublicProfile")}
            errorMessage={
              errors.find((x) => x.name === "isPublicProfile")?.message
            }
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
        </fieldset> */}

          <div className="grid gap-2 grid-cols-[1fr_2fr]">
            <Button
              type="reset"
              variant="secondary"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                setErrors([]);
              }}
            >
              Reset
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
        {isDevMode && (
          <div
            className="dev-panel 
            h-[fit-content]
          "
          >
            <div className="p-4  rounded-md h-[500px]    h-[fit-content] ">
              <h3 className="text-lg font-semibold text-pink-500 ">
                Field Errors {errors.length > 0 && `(${errors.length})`}
              </h3>

              <pre className="text-pink-500 overflow-auto text-xs ">
                {JSON.stringify(errors, null, 2)}
              </pre>
            </div>
            {/* <div className="p-4  rounded-md    h-[fit-content] ">
              <h3 className="text-lg font-semibold text-pink-500 ">Rules</h3>

              <div>
                <textarea
                  name="rules"
                  className="w-full h-[500px] text-xs"
                  value={currentRules}
                  onChange={handleChange}
                />
                {jsonError && (
                  <div className="error-message">
                    Error: Invalid JSON format
                  </div>
                )}
                {/* Other components */}
              {/* </div> */}
            {/* </div>  */}
          </div>
        )}
      </div>
    </div>
  );
}
