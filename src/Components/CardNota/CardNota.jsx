import React, { Component } from 'react';
import "./styles.css"
export default class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">nota</h3>
                </header>
                <p className="card-nota_texto">nota....</p>
            </section>
        );
    }
}