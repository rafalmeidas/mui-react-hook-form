import { UseControllerProps, FieldValues, Path } from "react-hook-form";
import { AutocompleteProps } from "@mui/material";

export type OptionAutocompleteMultiple<TData> = {
  label: string;
  value: number | string;
  data?: TData;
};

export type MUIHookFormAutocompleteMultipleProps<
  TData,
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  name: string;
  label: string;
  options: OptionAutocompleteMultiple<TData>[];
  handleOnChange?: (option: OptionAutocompleteMultiple<TData>[]) => void;
} & UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteProps<any, any, any, any>, "renderInput">;
