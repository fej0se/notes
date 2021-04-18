import React, { Component } from 'react';
import "./styles.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"
export default class CardNota extends Component {
    state = {}
    apagar(){
        const id = this.props.id;
        this.props.apagarNota(id);
    };

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)} />
                </header>
                <p className="card-nota_texto">{this.props.text}</p>
            </section>
        );
    }
}