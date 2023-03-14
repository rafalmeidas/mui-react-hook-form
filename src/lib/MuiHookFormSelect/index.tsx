import {
  FormHelperText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FieldValues, Controller, PathValue, Path } from "react-hook-form";

import { MuiHookFormSelectProps } from "./types";

const MuiHookFormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  options,
  showDefaultOption,
}: MuiHookFormSelectProps<TFieldValues, TName>) => (
  <Controller
    control={control}
    name={name}
    defaultValue={"" as PathValue<TFieldValues, string & TName>}
    render={({ field, fieldState: { error, invalid } }) => (
      <FormControl fullWidth error={invalid}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select {...field} label={label} fullWidth>
          {showDefaultOption ? (
            <MenuItem value="default">Selecione</MenuItem>
          ) : null}
          {options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    )}
  />
);

export default MuiHookFormSelect;
