import React from 'react';
import './listeCodingSchool14.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Liste from './Liste'

class Liste2 extends React.Component {
    constructor() {
        super();
        this.state = {
          input : "",
          value : [
              
          ],
        }
      }
      ajouter = () => {
      let x = this.state;
      if (x.input === "") {
        return
        
      } else {
        let objet = {
          valeur : x.input,
          validate : false
        }
        x.value.push(objet);
        x.input = "";
      }
      
      this.setState(x)
      }
      
      enter = (e) => {
        let x = this.state
        if (x.input === "") {
          return
        } else {
          if (e.key === "Enter") {
            
            let objet = {
              valeur : x.input,
              validate : false,
              validate2 : false,
              validate3 : false
            }
            x.value.push(objet);
            x.input = "";
            this.setState(x);
            return
          }
        }
        
      }
      
      valider = (i) => {
        let y = this.state
        if (y.value[i].validate === true) {
          y.value[i].validate = false
          
        } else {
          y.value[i].validate = true
          y.value[i].validate2 = false
          y.value[i].validate3 = false
          
        }
        console.log("test");
        this.setState(y)
      }
      valider2 = (i) => {
        let z = this.state
        if (z.value[i].validate2 === true) {
          z.value[i].validate2 = false
        } else {
          z.value[i].validate2 = true
          z.value[i].validate = false
          z.value[i].validate3 = false
          
        }
        console.log("test");
        this.setState(z)
      }
      valider3 = (i) => {
        let a = this.state
        if (a.value[i].validate3 === true) {
          a.value[i].validate3 = false
        } else {
          a.value[i].validate3 = true
          a.value[i].validate = false
          a.value[i].validate2 = false
        }
        console.log("test");
        this.setState(a)
      }
      
      
      handleChange(e) {
        this.setState({ input: e.target.value })
      }
    render() {
        return (
            <div>
                    {
                
                <div className="">
                    <input type="text" className=" mr-3" onChange={e => this.handleChange(e)} value={this.state.input} onKeyPress={this.enter}/>
                    <button className="bouton" onClick={() => this.ajouter()} >Ajouter</button>
                </div>
            }  

            { 
                
                this.state.value.map((e,i) => {
                    return(
                    <div>
                        < Liste key={i}  valeur={e.valeur} valider={() => this.valider(i)} valider2={() => this.valider2(i)} valider3={() => this.valider3(i)} validate={e.validate} validate2={e.validate2} validate3={e.validate3}/>
                    </div>
                    )
                
                })
            } 




         
                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 1
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 2
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={() => this.valider()}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 3
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 4
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 5
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 6
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 7
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 8
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 9
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 10
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 11
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 12
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 13
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            eleve 14
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                        </div>
                    </div>

                
            </div>
        );
    }
}

export default Liste2;