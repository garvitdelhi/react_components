import React, { Component } from 'react';
import Dropdown from './index'
import './example_style.css';

export default class DropdownExample extends Component {

  static title = "Dropdown Component";
  static testData = {
    placeholder: "Select City",
    list: [
      {
        text: "Mumbai",
        value: "0"
      },
      {
        text: "Delhi",
        value: "1"
      },
      {
        text: "Bangalore",
        value: "2",
        disabled: true
      },
      {
        text: "Hyderabad",
        value: "3"
      },
      {
        text: "Ahmedabad",
        value: "4"
      },
      {
        text: "Chennai",
        value: "5"
      },
      {
        text: "Kolkata",
        value: "6"
      },
      {
        text: "Surat",
        value: "7"
      },
      {
        text: "Pune",
        value: "8"
      },
      {
        text: "Jaipur",
        value: "9"
      },
      {
        text: "Lucknow",
        value: "10"
      },
      {
        text: "Kanpur",
        value: "11"
      },
      {
        text: "Nagpur",
        value: "12"
      },
      {
        text: "Visakhapatnam",
        value: "13"
      },
      {
        text: "Indore",
        value: "14"
      },
      {
        text: "Thane",
        value: "15"
      },
      {
        text: "Bhopal",
        value: "16"
      },
      {
        text: "Pimpri",
        value: "17"
      },
      {
        text: "Patna",
        value: "18"
      },
      {
        text: "Vadodara",
        value: "19"
      }
    ]
  };

  static codeExample = "<Dropdown " +
    "placeholder=\"Select city\" " +
    "data={\n\t[\n" +
    "\t\t{text: \"Mumbai\", value: \"0\"},\n" +
    "\t\t{text: \"Delhi\", value: \"1\"},\n" +
    "\t\t{text: \"Bangalore\", value: \"2\", disabled: true},\n" +
    "\t\t{text: \"Hyderabad\", value: \"3\"},\n" +
    "\t\t{text: \"Ahmedabad\", value: \"4\"},\n" +
    "\t\t{text: \"Chennai\", value: \"5\"},\n" +
    "\t\t{text: \"Kolkata\", value: \"6\"},\n" +
    "\t\t{text: \"Surat\", value: \"7\"},\n" +
    "\t\t{text: \"Pune\", value: \"8\"},\n" +
    "\t\t{text: \"Jaipur\", value: \"9\"},\n" +
    "\t\t{text: \"Lucknow\", value: \"10\"},\n" +
    "\t\t{text: \"Kanpur\", value: \"11\"},\n" +
    "\t\t{text: \"Nagpur\", value: \"12\"},\n" +
    "\t\t{text: \"Visakhapatnam\", value: \"13\"},\n" +
    "\t\t{text: \"Indore\", value: \"14\"},\n" +
    "\t\t{text: \"Thane\", value: \"15\"},\n" +
    "\t\t{text: \"Bhopal\", value: \"16\"},\n" +
    "\t\t{text: \"Pimpri\", value: \"17\"},\n" +
    "\t\t{text: \"Patna\", value: \"18\"},\n" +
    "\t\t{text: \"Vadodara\", value: \"19\"}\n" +
    "\t]\n}\n" +
    "/>";

  constructor(props) {
    super(props);

    this.state = {
      selection: null
    };
  }

  selectionHandler = (selection) => {
    this.setState({
      selection: selection
    })
  }

  render () {
    const { selection } = this.state;

    return (
      <div>
        <div>
          <span> Rendered </span>
          <div className="dropdown-component">
            <Dropdown
              placeholder={DropdownExample.testData.placeholder}
              options={DropdownExample.testData.list}
              onSelection={this.selectionHandler}
            />
            <span className="selection-example"> Selected Value is {selection ? selection.value : `null`} </span>
          </div>
        </div>
        <div>
          <span> Code Example </span>
          <pre className="dropdown-code-example">
            {DropdownExample.codeExample}
          </pre>
        </div>
      </div>
    );
  }
}