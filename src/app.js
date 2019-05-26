import React from 'react';
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { nickName } from "./observables/nick-name";
import { todos } from "./observables/todos";
import { configure } from "mobx";

configure({ enforceActions: 'observed' });

@observer
class App extends React.Component {
  handleIncrement = () => {
    nickName.increment();
  };

  handleDecrement = () => {
    nickName.decrement();
  };

  render() {
    return (
      <div className="App">
        <DevTools/>
        <h1>Name {nickName.nickName}</h1>
        <h1>Age {nickName.age}</h1>
        <button onClick={this.handleDecrement}><h1>-1</h1></button>
        <button onClick={this.handleIncrement}><h1>+1</h1></button>
        <ul>
          {todos.map(({ text }) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
