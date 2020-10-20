import React from 'react';

export default class Liste extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.valeur}</span>
                <button>Présent(e)</button>
                <button>Retard</button>
                <button>Absent(e)</button>
            </li>
        )
    }
}