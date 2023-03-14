import { UseControllerProps, FieldValues, Path } from "react-hook-form";

export type OptionSelect = {
  label: string;
  value: number | string;
};

export type MuiHookFormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  name: string;
  label: string;
  options: OptionSelect[];
  showDefaultOption?: boolean;
} & UseControllerProps<TFieldValues, TName>;
