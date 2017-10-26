import React, { Component } from 'react';
import { container, input } from './Input.css';
import {connect} from "react-redux";
import {addMessage} from "../Store/messagesActions";

export class Input extends Component {
  constructor(props) {
    super(props);

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ key, target }) {
    if (key === 'Enter') {
      this.props.dispatch(addMessage(target.value));
    }
  }

  render() {
    return (
      <div className={container}>
        <input
          className={input}
          onKeyPress={this.onEnter}
        />
      </div>
    );
  }
}

export default connect()(Input);
