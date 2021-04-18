import { Component } from "react";
import CreateNotes from "./Components/CreateNotes"
import ListaDeNotas from "./Components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      notas: []
    };
  };
  criarNota(titulo, text){
    const novaNota = {titulo, text};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    };
    this.setState(novoEstado)
  };

  render() {
    return (
      <section className="conteudo">
        <CreateNotes criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}