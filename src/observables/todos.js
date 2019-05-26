import { observable } from "mobx";

export const todos = observable(
  [
    {text: 'Learn React'},
    {text: 'Learn MobX'}
  ]
);
