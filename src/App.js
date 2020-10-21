import React from 'react';
import Liste from "./components/Liste";

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
if (x.input == "") {
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
  if (x.input == "") {
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
  <div className="container">
  <div className="text-center">
    <h1>fiche de présence</h1>
    <input type="text" className="w-50" onChange={e => this.handleChange(e)} value={this.state.input} onKeyPress={this.enter}/>
    <button className="w-25" onClick={() => this.ajouter()} >Ajouter</button>
  </div>
  <ul>
    {
      this.state.value.map((e,i) => {
        return(
          < Liste key={i}  valeur={e.valeur}/>
        )
        
      })
    } 
  </ul>
</div>
)
}
}