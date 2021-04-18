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

  deletarNota(id){
    let notas = this.state.notas;
    notas.splice(id, 1)
    this.setState({notas: notas})
  }

  render() {
    return (
      <section className="conteudo">
        <CreateNotes criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
    );
  }
}