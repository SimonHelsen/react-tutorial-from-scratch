import { Component} from "react";
import * as React from "react";
import "./App.scss";

export interface AppProps {
  compiler: string; framework: string;
}

export class App extends Component<AppProps, {}> {
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;
