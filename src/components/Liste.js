import React from 'react';

export default class Liste extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-4 text-light">
                    {this.props.valeur}
                </div>
                <div className="col-8 d-flex flex-nowrap">
                    <button className={`btn btn-outline-success ${this.props.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.props.valider}>Présent(e)</button>
                    <button className={` btn btn-outline-warning ${this.props.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.props.valider2}>Retard</button>
                    <button className={` btn btn-outline-danger ${this.props.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.props.valider3}>Absent(e)</button>
                </div>
            </div>

                
        )
    }
}