import { UseControllerProps, FieldValues, Path } from "react-hook-form";
import { AutocompleteProps } from "@mui/material";

export type OptionAutocomplete<TData> = {
  label: string;
  value: number | string;
  data?: TData;
};

export type MUIHookFormAutocompleteProps<
  TData,
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  name: string;
  label: string;
  options: OptionAutocomplete<TData>[];
  handleOnChange?: (option: OptionAutocomplete<TData>) => void;
} & UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteProps<any, any, any, any>, "renderInput">;
