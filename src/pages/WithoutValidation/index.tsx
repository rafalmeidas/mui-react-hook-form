import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";

import MUIHookFormAutocompleteMultiple from "../../components/Inputs/MUIHookFormAutocompleteMultiple";
import MUIHookFormAutocomplete from "../../components/Inputs/MUIHookFormAutocomplete";
import MUIHookFormTextField from "../../components/Inputs/MUIHookFormTextField";
import MUIHookFormCheckbox from "../../components/Inputs/MUIHookFormCheckbox";
import MuiHookFormSelect from "../../components/Inputs/MuiHookFormSelect";
import MUIHookFormRadio from "../../components/Inputs/MUIHookFormRadio";
import ButtonLoader from "../../components/ButtonLoader";

import { OptionAutocompleteMultiple } from "../../components/Inputs/MUIHookFormAutocompleteMultiple/types";
import { OptionAutocomplete } from "../../components/Inputs/MUIHookFormAutocomplete/types";
import { AutocompleteOptions } from "../../data/types";

import {
  AUTOCOMPLETE_MULTIPLE_OPTIONS,
  AUTOCOMPLETE_OPTIONS,
  RADIO_OPTIONS,
  SELECT_OPTIONS,
} from "../../data/options";
import WrapperSection from "../../components/Wrappers/WrapperSection";

type Fields = {
  textfield: string;
  select: string | number;
  autocomplete: null | OptionAutocomplete<AutocompleteOptions>;
  autocompleteMultiple: [] | OptionAutocompleteMultiple<AutocompleteOptions>[];
  checkbox: boolean;
  radio: string | number;
};

const WithoutValidation = () => {
  const { control, handleSubmit, watch } = useForm<Fields>({
    defaultValues: {
      textfield: "",
      select: "",
      autocomplete: null,
      autocompleteMultiple: [],
      checkbox: false,
      radio: "",
    },
  });

  const handleOnSubmit = (values: Fields) => {
    console.log(values);
  };

  return (
    <WrapperSection title="Components">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MUIHookFormTextField
              control={control}
              name="textfield"
              label="TextField"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiHookFormSelect
              control={control}
              name="select"
              label="Select"
              showDefaultOption
              options={SELECT_OPTIONS}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MUIHookFormAutocomplete
              control={control}
              name="autocomplete"
              label="Autocomplete"
              options={AUTOCOMPLETE_OPTIONS}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MUIHookFormAutocompleteMultiple
              control={control}
              name="autocompleteMultiple"
              label="Autocomplete Multiple"
              options={AUTOCOMPLETE_MULTIPLE_OPTIONS}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MUIHookFormCheckbox
              control={control}
              name="checkbox"
              label="Checkbox"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MUIHookFormRadio
              control={control}
              name="radio"
              label="Radio"
              options={RADIO_OPTIONS}
            />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <ButtonLoader type="submit">OK</ButtonLoader>
          </Grid>
        </Grid>
        {/* <code>{JSON.stringify(watch("autocomplete"), null, 2)}</code> */}
        <pre>{JSON.stringify(watch(), null, 4)}</pre>
      </form>
    </WrapperSection>
  );
};

export default WithoutValidation;
