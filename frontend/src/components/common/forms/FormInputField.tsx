import {
  FieldPath,
  FieldValues,
  PathValue,
  UnpackNestedValue,
  useController,
} from "react-hook-form";
import * as React from "react";
import {
  errorControlClasses,
  IBaseFormFieldProps,
  normalControlClasses,
} from "./utils";
import { FormFieldError } from "./FormFieldError";

interface IFormInputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends IBaseFormFieldProps<TFieldValues, TName> {
  type?: React.HTMLInputTypeAttribute;
}

export function FormInputField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  fieldProps,
  label,
  type = "text",
}: IFormInputFieldProps<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    ...fieldProps,
    defaultValue:
      fieldProps.defaultValue ??
      ("" as UnpackNestedValue<PathValue<TFieldValues, TName>>),
  });

  const controlClasses = fieldState.error
    ? errorControlClasses
    : normalControlClasses;

  return (
    <>
      <label htmlFor="title" className="font-light">
        {label}
      </label>
      <div className="flex flex-col">
        <input
          type={type}
          className={`w-full rounded-md ${controlClasses}`}
          {...field}
        />
        <FormFieldError error={fieldState.error} />
      </div>
    </>
  );
}
