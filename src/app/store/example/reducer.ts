import { Action } from "../../../core/utils/ActionInterface";

export interface ExampleState {
  exampleValue1: string;
  exapmleValue2?: number;
}

export const initialState: ExampleState = {
  exampleValue1: "example"
};

const reducer = (state: ExampleState = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "EXAPLE_TYPE_VALUE_1":
      return { ...state, exampleValue1: payload };
    default:
      return state;
  }
};

export default reducer;
