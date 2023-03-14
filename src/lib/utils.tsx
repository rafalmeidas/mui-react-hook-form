import { RefCallback } from "react";
import {
  AutocompleteRenderInputParams,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FieldError } from "react-hook-form";

export const renderInput = (
  params: AutocompleteRenderInputParams,
  ref: RefCallback<any>,
  label: string,
  invalid: boolean,
  error: FieldError | undefined,
  disabled: boolean | undefined,
) => (
  <TextField
    {...params}
    fullWidth
    inputRef={ref}
    variant="outlined"
    label={label}
    error={invalid}
    helperText={error?.message}
    InputProps={{
      ...params.InputProps,
      endAdornment: (
        <InputAdornment position="end">
          {disabled ? <CircularProgress size={16} color="primary" /> : null}
          {params.InputProps.endAdornment}
        </InputAdornment>
      ),
    }}
  />
);
