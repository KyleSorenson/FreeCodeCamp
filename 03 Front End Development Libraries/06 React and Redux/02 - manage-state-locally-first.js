class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  };
  submitMessage(event) {
    event.preventDefault();
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  };
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
          <input 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.input} />
          <button onClick={this.submitMessage}>Add message</button>
        <ul>
        {this.state.messages.map((message, index) => (
          <li key={'message-' + index}>{message}</li>
        ))}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};