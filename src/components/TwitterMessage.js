import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maximumChars: this.props.maxChars,
      textInput: ''
    };
  }

  handleCharInput = (event) => {
    // debugger

    this.setState({
      textInput: event.target.value,
      maximumChars: (this.state.maximumChars - 1)    
    })
    // this.changeCharCount(event)
  }

  // changeCharCount = (event) =>{
  //   this.setState({
  //     maximumChars: this.state.maximumChars - event.target.length
  //   })
  // }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event =>this.handleCharInput(event)} value={this.state.textInput} />
        <p>Remaining Characters for message: {this.state.maximumChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
