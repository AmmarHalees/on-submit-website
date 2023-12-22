// UncontrolledForm
"use client";
import React from "react";
import Input from "../Input";
import Button from "../Button";
import TextArea from "../TextArea";
import Select from "../Select";
import { validateField, validateForm } from "onsubmit";
import RulesMap from "./rules";
import { useDebouncedCallback } from "use-debounce";
import { FieldError, FormDataObject } from "onsubmit/types";

export default function UncontrolledForm() {
  const [errors, setErrors] = React.useState<Array<FieldError>>([]);

  // for form-level validation
  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const mydata = {
      firstName: data.firstName,
      lastName: data.lastName,
      portfolio: data.portfolio,
      bio: data.bio,
      phoneNumber: data.phoneNumber,
      email: data.email,
    } as FormDataObject;
    const errors = validateForm(mydata, RulesMap);
    setErrors(errors);
  };

  // for per-field validation
  const handleOnchange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const errors = validateField(
        value,
        name,
        RulesMap[name as keyof typeof RulesMap]
      );

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
    <div
      className="
      p-2
      md:p-4
      mx-auto 
      md:my-8
      bg-gray-50
      rounded-md
      shadow-md
      max-w-md
      "
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
              errorMessage={errors.find((x) => x.name === "startHour")?.message}
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
        <fieldset className="grid gap-2 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Privacy
          </legend>
          <Input
            label="Public profile"
            name="isPublicProfile"
            type="checkbox"
            isInvalid={!!errors.find((x) => x.name === "isPublicProfile")}
            errorMessage={
              errors.find((x) => x.name === "isPublicProfile")?.message
            }
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
        </fieldset>

        <div className="grid gap-2 grid-cols-[1fr_2fr]">
          <Button type="reset" variant="secondary">
            Reset
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
