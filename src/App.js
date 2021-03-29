import { Component } from "react";
import CreateNotes from "./Components/CreateNotes"
import ListaDeNotas from "./Components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {
  criarNota(titulo, nota){
    alert(titulo)
    alert(nota)

  }

  render() {
    return (
      <section className="conteudo">
        <CreateNotes criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}