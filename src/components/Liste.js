import React from 'react';

export default class Liste extends React.Component {
    render() {
        return (
            <li className="list-group">
                <div className="d-flex justify-content-center">
                <span>{this.props.valeur}</span>

                
                <div>
                <button>Présent(e)</button>
                <button>Retard</button>
                <button>Absent(e)</button>
                </div>

                </div>
            </li>
        )
    }
}