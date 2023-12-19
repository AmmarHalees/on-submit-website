// UncontrolledForm
"use client";
import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";
import TextArea from "../TextArea";
import Select from "../Select";
import ImageUpload from "../ImageUpload/ImageUpload";
import { validateField } from "onsubmit";
import RulesMap from "./rules";

type FieldError = {
  name: string;
  message: string;
};
export default function UncontrolledForm() {
  const [errors, setErrors] = React.useState<Array<FieldError>>([]);

  const validateForm = (data: any) => {
    const errors: Array<FieldError> = [];

    Object.entries(data).forEach(([key, value]) => {
      errors.push(
        ...validateField(value, key, RulesMap[key as keyof typeof RulesMap])
      );
    });
    return errors;
  };

  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: string | FormDataEntryValue } =
      Object.fromEntries(formData);
    const errors = validateForm(data);
    console.log(errors);
  };

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
            <Input label="First Name*" name="firstName" />
            <Input label="Last Name*" name="lastName" />
          </div>
          <Input
            label="Portfolio"
            name="portfolio"
            placeholder="ex: https://clay.dev"
            type="url"
          />
          <TextArea label="Bio" name="bio" />
        </fieldset>
        <fieldset className="grid gap-2 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Contact Info
          </legend>
          <Input
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="ex:"
          />
          <Input
            label="Corporate email*"
            name="email"
            placeholder="ex: clay@whisker.com"
          />
        </fieldset>

        <fieldset className="grid gap-2 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Work-related Info
          </legend>

          <div className="grid gap-2 md:grid-cols-2">
            <Input label="Start hour" name="startHour" type="time" />
            <Input label="End hour" name="endHour" type="time" />
          </div>

          <Select label="Speciality" name="speciality" />
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
