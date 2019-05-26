import { observable, action } from "mobx";

export const nickName = observable({
    firstName: 'Nick',
    age: 58,

    get nickName() {
      console.log('Generate nickName');

      return `${this.firstName}:${this.age}`;
    },

    increment() {
      this.age++;
    },

    decrement() {
      this.age--;
    }
  },
  {
    increment: action,
    decrement: action
  });
