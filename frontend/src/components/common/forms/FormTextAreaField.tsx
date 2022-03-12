import { FieldPath, FieldValues, useController } from "react-hook-form";
import { FormFieldError } from "./FormFieldError";
import {
  errorControlClasses,
  IBaseFormFieldProps,
  normalControlClasses,
} from "./utils";

export function FormTextAreaField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ fieldProps, label }: IBaseFormFieldProps<TFieldValues, TName>) {
  const { field, fieldState } = useController(fieldProps);

  const controlClasses = fieldState.error
    ? errorControlClasses
    : normalControlClasses;

  return (
    <>
      <label htmlFor="title" className="font-light">
        {label}
      </label>
      <div className="flex flex-col">
        <textarea
          rows={10}
          className={`w-full rounded-md ${controlClasses}`}
          {...field}
        />
        <FormFieldError error={fieldState.error} />
      </div>
    </>
  );
}
