import React from "react";
import { Table } from "reactstrap";
import './listaTreino.css'

class ListaTreino extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            ListaTreino : []
        }
    }

    render(){
        return (
            <div>
                <header>
                    <h1>Treino</h1>
                </header>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Repetições</th>
                            <th>Séries</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laís</td>
                            <td>20</td>
                            <td>4</td>
                            <td>16/06/2023</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ListaTreino;