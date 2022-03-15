import { useForm } from "react-hook-form";
import * as React from "react";
import { Button } from "../../components/common/Button";
import { FormInputField } from "../../components/common/forms/FormInputField";
import { FormTextAreaField } from "../../components/common/forms/FormTextAreaField";
import {
  ChirpsListDocument,
  ChirpsListQuery,
  useCreateChirpMutation,
} from "../../__generated__/graphql";

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
  const [createChirp] = useCreateChirpMutation({
    update: (cache, { data }) => {
      if (data?.createChirp) {
        // we made a chirp!
        const listQuery = cache.readQuery<ChirpsListQuery>({
          query: ChirpsListDocument,
        });
        let newList = [data.createChirp];
        if (listQuery?.chirps.length) {
          // the newest chirp should be on top so we just concat the old ones
          newList = newList.concat(listQuery.chirps);
        }

        cache.writeQuery({
          query: ChirpsListDocument,
          data: { chirps: newList },
        });
      }
    },
  });
  const onSubmit = React.useCallback(
    async (data: IAddChirpFormData) => {
      await createChirp({
        variables: { input: { ...data } },
      });
    },
    [createChirp]
  );

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
