import React from 'react';
import Liste from "./components/Liste";
import Card from "./components/filtre/menu_filtre.js";
import Liste2 from './components/ListeCodingSchool14';


export default class App extends React.Component{
state = {
  todos: [],
  todoToShow: "all",
};

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

  

filterPres = () => { 
  console.log("pres");
}

filterAbs = () => {
  console.log("abs");
}

filterLate = () => {
  console.log("late");
}

updateTodoToShow = (s) => {
  this.setState({
    todoToShow: s
  })
}

render(){
  let todos = [];

  if (this.state.todoToShow === 'all') {
    todos = this.state.todos;
  } else if (this.state.todoToShow === 'active') {
    todos = this.state.todos.filter(todo => !todo.complete);
  } else if (this.state.todoToShow === 'complete') {
    todos = this.state.todos.filter(todo => todo.complete);
  } else if (this.state.todoToShow === 'complete') {
    todos = this.state.todos.filter(todo => todo.complete);
  }


return(
  <div className="container-fluid justify-content-center d-flex align-items-center">
    <div className="outman text-center">
      <div id="h1">
        <h1 className="m-0 mb-5 mt-5 text-white">fiche de présence</h1>
      </div>
      <div className="">
        <input type="text" className=" mr-3" onChange={e => this.handleChange(e)} value={this.state.input} onKeyPress={this.enter}/>
        <button className="bouton" onClick={() => this.ajouter()} >Ajouter</button>
      </div>
      <div>
        <ul className="d-flex">
          <li><button onClick={() => this.updateTodoToShow("all")}>Tous</button></li>
          <li><button onClick={() => this.updateTodoToShow("all")}>Présents</button></li>
          <li><button onClick={() => this.updateTodoToShow("all")}>Absents</button></li>
          <li><button onClick={() => this.updateTodoToShow("all")}>Retards</button></li>
        </ul>
      </div>
      <ul id='liste'>
        {
          this.state.value.map((e,i) => {
            return(
              <div>
                < Liste key={i}  valeur={e.valeur} valider={() => this.valider(i)} valider2={() => this.valider2(i)} valider3={() => this.valider3(i)} validate={e.validate} validate2={e.validate2} validate3={e.validate3}/>
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