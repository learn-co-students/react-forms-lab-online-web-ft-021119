import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      length: 0,
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      length: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <strong>Character count:</strong><p> {this.props.maxChars - this.state.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
