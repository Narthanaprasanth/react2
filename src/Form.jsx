import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic:'react'
    }
  }
  handleusernamechange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }
  handlecommentscahnge = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handletopicchange=(event) =>{
    this.setState({
        topic:event.target.value
    })
  }
  handleSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()      //TO PREVENT THE DEFAULT BAHAVOIRS LIKE REFRESHING WHILE CLICKING SUBMIT
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleusernamechange}
          />
        </div>
        <div>
          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handlecommentscahnge}
          ></textarea>
        </div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handletopicchange}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">vue</option>
        </select><br />
        <button>submit</button>
      </form>
    );
  }
}
export default Form;



















