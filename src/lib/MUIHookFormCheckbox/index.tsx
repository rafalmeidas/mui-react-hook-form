import {
  UseControllerProps,
  FieldValues,
  Controller,
  Path,
} from "react-hook-form";
import { Checkbox, FormControlLabel, CheckboxProps } from "@mui/material";

type MUIHookFormCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  handleOnChange?: (checked: boolean) => void;
  label: string;
} & UseControllerProps<TFieldValues, TName> &
  CheckboxProps;

const MUIHookFormCheckbox = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  handleOnChange,
}: MUIHookFormCheckboxProps<TFieldValues, TName>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange, ...field } }) => (
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e, checked) => {
              onChange(e);
              if (handleOnChange) handleOnChange(checked);
            }}
            checked={value}
            {...field}
          />
        }
        label={label}
      />
    )}
  />
);

export default MUIHookFormCheckbox;
