import { FieldValues, Path, UseControllerProps } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

export interface ExampleOne<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  handleOnChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) => void;
}

export type ExampleTwo<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  handleOnChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) => void;
} & UseControllerProps<TFieldValues, TName> &
  TextFieldProps;
