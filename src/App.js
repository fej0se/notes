import { Component } from "react";
import CreateNotes from "./Components/CreateNotes";
import ListaDeNotas from "./Components/ListaDeNotas"

export default class App extends Component {
  render() {
    return (
      <section>
        <CreateNotes />
        <ListaDeNotas />
      </section>
    );
  }
}