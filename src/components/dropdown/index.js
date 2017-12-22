import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);

    document.addEventListener('click', this.closeDropdown.bind(this), false);

    this.state = {
      dropdownVisible: false,
      optionSelected: null
    }
  }

  optionSelectedHandler = (index) => {
    if (!this.props.options[index].disabled) {
      this.setState({
        optionSelected: this.props.options[index],
        dropdownVisible: false
      })
      if (this.props.onSelection) {
        this.props.onSelection(this.props.options[index])
      }
    }
  }

  renderOptions = () => {
    return this.props.options.map((option, index) => {
      const dropdownOptionClassNames = classNames('dropdown-option', {
        'disabled': option.disabled
      });

      return (
        <div className={dropdownOptionClassNames} onClick={this.optionSelectedHandler.bind(this, index)} key={index}>
          {option.text}
        </div>
      );
    });
  }

  openDropdown = () => {
    this.setState({
      dropdownVisible: true
    })
  }

  closeDropdown = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({
        dropdownVisible: false
      })
    }
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
      <div className={dropdownClassNames} ref={node => { this.node = node;}} >
        {optionSelected === null && <div className="placeholder" onClick={this.openDropdown}>{this.props.placeholder}</div>}
        {optionSelected !== null && <div className="selection" onClick={this.openDropdown}>{optionSelected.text}</div>}
        <i className="dropdown-icon fa fa-caret-down" aria-hidden="true"></i>
        <div className={dropdownOptionsClassNames}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelection: PropTypes.func
}