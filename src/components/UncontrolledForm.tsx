// UncontrolledForm
"use client";
import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {
  onSubmit: (data: { name: string; email: string }) => void;
};

export default function UncontrolledForm() {
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
      >
        <fieldset className="grid gap-4 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Personal Info
          </legend>
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
        </fieldset>
        <fieldset className="grid gap-4 p-4">
          <legend className="text-lg font-semibold text-gray-600">
            Contact Info
          </legend>
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
