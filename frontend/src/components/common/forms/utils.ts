import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

export interface IBaseFormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> {
  fieldProps: UseControllerProps<TFieldValues, TName>;
  label: React.ReactNode;
}

export const normalControlClasses =
  "border-gray-300 focus:border-gray-800 focus:ring-gray-800";
export const errorControlClasses =
  "focus:border-red-500 border-red-500 focus:ring-red-500";

export const errorMessages = {
  required: "This field is required",
};
