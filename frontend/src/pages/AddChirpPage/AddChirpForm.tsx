import { useForm } from "react-hook-form";
import * as React from "react";
import { Button } from "../../components/common/Button";
import { FormInputField } from "../../components/common/forms/FormInputField";
import { FormTextAreaField } from "../../components/common/forms/FormTextAreaField";

interface IAddChirpFormData {
  title: string;
  content: string;
}

export const AddChirpForm: React.FC = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<IAddChirpFormData>({ mode: "onTouched" });
  const onSubmit = React.useCallback((data) => console.log(data), []);

  return (
    <div className="flex mt-1">
      <form className="w-3/4">
        <div className="flex flex-col my-2">
          <FormInputField
            fieldProps={{
              name: "title",
              rules: { required: true },
              control,
            }}
            label="Title"
          />
        </div>

        <div className="flex flex-col my-2">
          <FormTextAreaField
            label="Content"
            fieldProps={{ name: "content", rules: { required: true }, control }}
          />
        </div>

        <Button
          className="mt-10"
          disabled={isSubmitting}
          label="Submit"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
};
