declare module Types {
  type MUIHookFormTextFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends Path<TFieldValues> = Path<TFieldValues>,
  > = {
    handleOnChange?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
    ) => void;
  } & UseControllerProps<TFieldValues, TName> &
    TextFieldProps;
}
