import { FieldValues, Controller, Path } from "react-hook-form";
import { Autocomplete } from "@mui/material";

import { MUIHookFormAutocompleteMultipleProps } from "./types";

import { renderInput } from "../utils";

const MUIHookFormAutocompleteMultiple = <
  TData extends unknown,
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  options,
  handleOnChange,
  ...autoCompleteProps
}: MUIHookFormAutocompleteMultipleProps<TData, TFieldValues, TName>) => {
  const defaultValue = autoCompleteProps?.defaultValue
    ? autoCompleteProps.defaultValue
    : [];

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { ref, onChange, ...field },
        fieldState: { error, invalid },
      }) => (
        <Autocomplete
          {...autoCompleteProps}
          {...field}
          multiple
          options={options}
          isOptionEqualToValue={(item, current) => item.value === current.value}
          defaultValue={defaultValue}
          onChange={(e, data) => {
            onChange(data);
            if (handleOnChange) handleOnChange(data);
          }}
          renderInput={(params) =>
            renderInput(
              params,
              ref,
              label,
              invalid,
              error,
              autoCompleteProps.disabled,
            )
          }
        />
      )}
    />
  );
};

export default MUIHookFormAutocompleteMultiple;
