import React from "react";

class TwitterMessage extends React.Component {
  debugger
  constructor(props) {
    super(props);

    this.state = {
    value: '',
    }
  }

  // characterCount = () => {
  //   this.state.value.length < this.props.maxChars ? {} : {}
  // }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message"
          value={this.state.value}
          onChange={this.handleChange}
          />
        {this.props.maxChars - this.state.value.length}
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
