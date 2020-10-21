import React from 'react';
import Liste from "./components/Liste";
import Liste2 from './components/ListeCodingSchool14';


export default class App extends React.Component{
constructor() {
  super();
  this.state = {
    input : "",
    value : [],
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
        validate : false
      }
      x.value.push(objet);
      x.input = "";
      this.setState(x);
      return
    }
  }
  
}


handleChange(e) {
  this.setState({ input: e.target.value })
}
render(){
return(
  <div className="container-fluid justify-content-center d-flex align-items-center">
  <div className="outman text-center">
    <div><h1 className="m-0 mb-5 mt-5">fiche de présence</h1></div>
    <div className="">
    <input type="text" className=" mr-3" onChange={e => this.handleChange(e)} value={this.state.input} onKeyPress={this.enter}/>
    <button className="" onClick={() => this.ajouter()} >Ajouter</button>
    </div>
  
  <ul>
    {
      this.state.value.map((e,i) => {
        return(
          <div>

            <Liste key={i}  valeur={e.valeur}/>
            <Liste2/>
          </div>
        )
        
      })
    } 
  </ul>
  </div>
</div>
)
}
}