import { UseControllerProps, FieldValues, Path } from "react-hook-form";

export type OptionRadio = {
  label: string;
  value: number | string;
};

export type MUIHookFormRadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  handleOnChange?: (value: string) => void;
  label: string;
  options: OptionRadio[];
  row?: boolean;
} & UseControllerProps<TFieldValues, TName>;
