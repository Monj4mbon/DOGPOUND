import React, { Component } from 'react';
import './menu_filtre.css';



class Card extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  };
  
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };
  
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    };
  };

  filterAll = () => {
    console.log("all");
  }

  filterPres = () => {
    // let a = this.state 
    // if (a.) {
      
    // } else {
      
    // }
    console.log("pres");
  }

  filterLate = () => {
    console.log("late");
  }

  filterAbs = () => {
    console.log("abs");
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Filtrer</button>
        {
          this.state.showMenu ? (
              <div className="menu" ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                <button onClick={this.filterAll}>Tous</button>
                <button onClick={this.filterPres}>Présents</button>
                <button onClick={this.filterLate}>En retard</button>
                <button onClick={this.filterAbs}>Absents</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  };
};

export default Card;