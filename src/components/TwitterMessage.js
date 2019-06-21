import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.tweet}
          />
          <div>chars left: {this.props.maxChars-this.state.tweet.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
