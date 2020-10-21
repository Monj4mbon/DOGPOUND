import React from 'react';

export default class Liste extends React.Component {
    render() {
        return (
            <li className="list-group bg-light">
                <div className="d-flex justify-content-center">
                <span>{this.props.valeur}</span>

                
                <div>
                <button className="btn btn-outline-success">Présent(e)</button>
                <button className="btn btn-outline-warning">Retard</button>
                <button className="btn btn-outline-danger">Absent(e)</button>
                </div>

                </div>
            </li>
        )
    }
}