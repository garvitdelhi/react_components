import React, { Component } from 'react';
import classNames from 'classnames';
import './style.css';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdownVisible: false,
      optionSelected: null
    }
  }

  optionSelectedHandler = (index) => {
    this.setState({
      optionSelected: this.props.options[index]
    })
    if (this.props.onSelection) {
      this.props.onSelection(this.props.options[index])
    }
  }

  renderOptions = () => {
    return this.props.options.map((option, index) => {
      return (
        <div className="dropdown-option" onClick={this.optionSelectedHandler.bind(this, index)} key={index}>
          {option.text}
        </div>
      );
    });
  }

  toggleDropdown = () => {
    const { dropdownVisible } = this.state;

    this.setState({
      dropdownVisible: !dropdownVisible
    })
  }

  render() {

    const { dropdownVisible, optionSelected } = this.state;

    const dropdownClassNames = classNames('dropdown', {
      'active': dropdownVisible
    })
    const dropdownOptionsClassNames = classNames('dropdown-options', {
      'active': dropdownVisible
    });

    return (
      <div className={dropdownClassNames} onClick={this.toggleDropdown}>
        {optionSelected === null && <div className="placeholder">{this.props.placeholder}</div>}
        {optionSelected !== null && <div className="selection">{optionSelected.text}</div>}
        <i className="dropdown-icon fa fa-caret-down" aria-hidden="true"></i>
        <div className={dropdownOptionsClassNames}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}