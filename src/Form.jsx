import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      Comment: "",
      topic:"react"
    };
  }

  handlenamechange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlecommentchange = (event) => {
    this.setState({
      Comment: event.target.value,
    });
  };
  handletopichange=(event)=>{
    this.setState({
      topic:event.target.value
    })
  }
  handlesubmit=(event)=>{
    alert(`${this.state.username} ${this.state.Comment}${this.state.topic}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit}> 
      <div>
        <label>usernmame</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handlenamechange}
        />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.Comment}
            onChange={this.handlecommentchange}
          ></textarea>
        </div>
        <div>
          <label> Topic</label>
          <select value={this.state.topic} onChange={this.handletopichange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      <button type="submit">SUBMIT</button>
      </form>
    );
  }
}
export default Form;









