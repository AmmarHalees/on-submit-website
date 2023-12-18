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
      bg-gray-100
      rounded-md
      shadow-md
      max-w-md
      h-64
      "
    >
      <form
        className="
      grid 
      gap-4
      "
      >
        <Input
          label="First Name"
          name="firstName"
          type="text"
          placeholder={"First Name"}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
