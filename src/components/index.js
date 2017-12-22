import React, { Component } from 'react';
import DropdownExample from './dropdown/example';
import './style.css';

const componentsList = [
  {
    title: DropdownExample.title,
    component: DropdownExample
  }
];

class Components extends Component {
  render() {
    return (
      <div className="components">
      {
        componentsList.map((component, index) => {
          return (
            <div key={index} className="card">
              <div className="card-title">{component.title}</div>
              <div className="card-content">
                <component.component />
              </div>
            </div>
          );
        })
      }
      </div>
    );
  }
}

export default Components;