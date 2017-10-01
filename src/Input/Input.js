import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { container, input } from './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({
      inputValue: value,
    });
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      this.props.onEnter(this.state.inputValue);
    }
  }

  render() {
    return (
      <div className={container}>
        <input
          className={input}
          onChange={this.onChange}
          onKeyPress={this.onEnter}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

Input.propTypes = {
  onEnter: PropTypes.func.isRequired,
};

Input.defaultProps = {
  onEnter: () => {},
};

export default Input;
