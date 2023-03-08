import { AutocompleteOptions, SelectOptions } from "./types";

const AUTOCOMPLETE_DATA: AutocompleteOptions[] = [
  {
    id: 1,
    text: "Opção Autocomplete 1",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    text: "Opção Autocomplete 2",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    text: "Opção Autocomplete 3",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    text: "Opção Autocomplete 4",
    date: new Date().toLocaleDateString(),
  },
];

const SELECT_DATA: SelectOptions[] = [
  { id: 1, text: "Opção Select 1" },
  { id: 2, text: "Opção Select 2" },
  { id: 3, text: "Opção Select 3" },
  { id: 4, text: "Opção Select 4" },
];

export { AUTOCOMPLETE_DATA, SELECT_DATA };
