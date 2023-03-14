import { OptionAutocompleteMultiple } from "../lib/MUIHookFormAutocompleteMultiple/types";
import { AutocompleteMultipleOptions, AutocompleteOptions } from "./types";
import { OptionAutocomplete } from "../lib/MUIHookFormAutocomplete/types";
import { OptionSelect } from "../lib/MuiHookFormSelect/types";
import { OptionRadio } from "../lib/MUIHookFormRadio/types";

import { AUTOCOMPLETE_DATA, SELECT_DATA } from "./data";

const AUTOCOMPLETE_OPTIONS: OptionAutocomplete<AutocompleteOptions>[] =
  AUTOCOMPLETE_DATA.map((data) => ({
    label: data.text,
    value: data.id,
    data,
  }));

const AUTOCOMPLETE_MULTIPLE_OPTIONS: OptionAutocompleteMultiple<AutocompleteMultipleOptions>[] =
  AUTOCOMPLETE_DATA.map((data) => ({
    label: data.text,
    value: data.id,
    data,
  }));

const SELECT_OPTIONS: OptionSelect[] = SELECT_DATA.map(({ id, text }) => ({
  label: text,
  value: id,
}));

const RADIO_OPTIONS: OptionRadio[] = [
  { label: "Opção A", value: "A" },
  { label: "Opção B", value: "B" },
  { label: "Opção C", value: "C" },
  { label: "Opção D", value: "D" },
];

export {
  AUTOCOMPLETE_OPTIONS,
  AUTOCOMPLETE_MULTIPLE_OPTIONS,
  SELECT_OPTIONS,
  RADIO_OPTIONS,
};
