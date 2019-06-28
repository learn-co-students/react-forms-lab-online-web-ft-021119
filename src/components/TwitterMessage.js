import React from "react";
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
tweet: '',

    };
  }

handleTweet = event => {

  this.setState({
 tweet: event.target.value,

  })
}
 


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={this.handleTweet} />
      <p>Maximum : {this.props.maxChars - this.state.tweet.length} characters. </p>
      </div>

    );
  }
}
TwitterMessage.propTypes ={
  maxChars: PropTypes.number
 }
 TwitterMessage.defaultProp ={
  maxChars: 140
 }

export default TwitterMessage;
