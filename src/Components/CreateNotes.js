import { Component } from "react";

export default class CreateNotes extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button>Criar nota</button>
            </form>

        )
    }
}