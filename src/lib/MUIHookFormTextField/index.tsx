import { FieldValues, Controller, Path } from "react-hook-form";
import { TextField } from "@mui/material";

import { MUIHookFormTextFieldProps } from "./types";

const MUIHookFormTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  handleOnChange,
  ...textFieldProps
}: MUIHookFormTextFieldProps<TFieldValues, TName>) => (
  <Controller
    control={control}
    name={name}
    defaultValue={defaultValue}
    render={({
      field: { onChange, ...field },
      fieldState: { error, invalid },
    }) => (
      <TextField
        fullWidth
        variant="outlined"
        error={invalid}
        helperText={error?.message}
        onChange={(e) => {
          onChange(e);
          handleOnChange && handleOnChange(e);
        }}
        {...field}
        {...textFieldProps}
      />
    )}
  />
);

export default MUIHookFormTextField;
