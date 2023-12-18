// UncontrolledForm
"use client";
import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

type Props = {
  onSubmit: (data: { name: string; email: string }) => void;
};

export default function UncontrolledForm() {
  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div
      className="
      p-4
      mx-auto 
      my-8
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
          <legend className="text-lg font-semibold text-gray-600">
            Personal Info
          </legend>
          <div className="grid gap-2 md:grid-cols-2">
            <Input label="First Name" name="firstName" />
            <Input label="Last Name" name="lastName" />
          </div>
          <TextArea label="Bio" name="bio" />
        </fieldset>
        <fieldset className="grid gap-2 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Contact Info
          </legend>
          <Input label="Phone number" name="phoneNumber" placeholder="ex:" />
          <Input
            label="Corporate email"
            name="corporateEmail"
            placeholder="ex: clay@whisker.com"
          />
        </fieldset>

        <fieldset className="grid gap-2 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Additional Info
          </legend>
          <Input
            label="Hobbies"
            name="hobbies"
            placeholder="ex: reading"
            type="month"
          />
          <Input
            label="Corporate email"
            name="corporateEmail"
            placeholder="ex: clay@whisker.com"
          />
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
