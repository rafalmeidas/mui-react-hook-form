import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
import { FieldValues, Controller, Path } from "react-hook-form";

import { MUIHookFormRadioProps } from "./types";

const MUIHookFormRadio = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  options,
  row = true,
  handleOnChange,
}: MUIHookFormRadioProps<TFieldValues, TName>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, ...field } }) => (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          row={row}
          onChange={(e, value) => {
            onChange(e);
            if (handleOnChange) handleOnChange(value);
          }}
          {...field}
        >
          {options.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              control={<Radio />}
              label={label}
              value={value}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )}
  />
);

export default MUIHookFormRadio;
