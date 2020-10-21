import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Liste from './Liste'


class Liste1 extends React.Component {
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
      
      valider = () => {
        let y = this.state
        if (y.value.validate === true) {
          y.value.validate = false
          
        } else {
          y.value.validate = true
          y.value.validate2 = false
          y.value.validate3 = false
          
        }
        console.log("test");
        this.setState(y)
      }
      valider2 = () => {
        let z = this.state
        if (z.value.validate2 === true) {
          z.value.validate2 = false
        } else {
          z.value.validate2 = true
          z.value.validate = false
          z.value.validate3 = false
          
        }
        console.log("test");
        this.setState(z)
      }
      valider3 = () => {
        let a = this.state
        if (a.value.validate3 === true) {
          a.value.validate3 = false
        } else {
          a.value.validate3 = true
          a.value.validate = false
          a.value.validate2 = false
        }
        console.log("test");
        this.setState(a)
      }
      delete = (i) => {
        let a = this.state;
        a.value.splice(i, 1);
        this.setState(a)
        console.log("test");
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
                            < Liste key={i}  valeur={e.valeur} valider={() => this.valider(i)} valider2={() => this.valider2(i)} valider3={() => this.valider3(i)} delete={() => this.delete(i)} validate={e.validate} validate2={e.validate2} validate3={e.validate3}/>
                        </div>
                        )
                     
                   })
                }

                


         
                    <div className="row">
                        <div className="col-4 text-light">
                            Zidane
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.value.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={() => this.valider()}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.value.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={() => this.valider2()}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.value.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={() => this.valider3()}>Absent(e)</button>
                            <button className="btn btn-danger" onClick={() => this.delete()}><i className="far fa-trash-alt"></i></button>
                            {/* <button onClick={} className="btn btn-outline-danger">X</button> */}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Maxime
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.props.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={() => this.valider()}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.props.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={() => this.valider2()}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.props.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={() => this.valider3()}>Absent(e)</button>
                            <button className="btn btn-danger" onClick={(i) => this.delete()}><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Jordano
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-4 text-light">
                            Kawtar
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Abdel
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Oussama
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-light">
                            Cactus
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Valentin
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Karis
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Yasmina
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Kadri
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Imad
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                           Fanny
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Martin
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Pierre
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-light">
                            Sergen
                        </div>
                        <div className="col-8 d-flex flex-nowrap">
                            <button className={`btn btn-outline-success ${this.state.validate === true ? "bg-success text-white" : "bg-white"} `} onClick={this.state.valider}>Présent(e)</button>
                            <button className={` btn btn-outline-warning ${this.state.validate2 === true ? "bg-warning text-white" : "bg-white"} `} onClick={this.state.valider2}>Retard</button>
                            <button className={` btn btn-outline-danger ${this.state.validate3 === true ? "bg-danger text-white" : "bg-white"} `} onClick={this.state.valider3}>Absent(e)</button>
                            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>

                
            </div>
        );
    }
}

export default Liste1;