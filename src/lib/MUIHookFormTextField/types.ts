import { ChangeEvent } from "react";
import { UseControllerProps, FieldValues, Path } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

export type MUIHookFormTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = {
  handleOnChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) => void;
} & UseControllerProps<TFieldValues, TName> &
  TextFieldProps;
