import { Component } from "react";
import "./styles.css"

export default class CreateNotes extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.nota = ""
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaNota(evento) {
        evento.stopPropagation();
        this.nota = evento.target.value
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        if (this.titulo == '') {
            alert('Ops, você esqueceu de digitar um titulo.')
        } else if (this.nota == '') {
            alert('Ops, você esqueceu de digitar uma nota.')
        } else {
            this.props.criarNota(this.titulo, this.nota);
        }
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastrp_input"
                    onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaNota.bind(this)}></textarea>
                <button
                    className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>

        )
    }
}