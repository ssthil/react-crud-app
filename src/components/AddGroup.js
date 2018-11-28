import React, { Component } from "react";

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.groupInput.value === "") {
      console.log("Please ender group name");
    } else {
      // console.log(this.groupInput.value);
      this.props.addGroup(this.groupInput.value);
    }

    this.groupInput.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            placeholder="group name"
            ref={groupInput => (this.groupInput = groupInput)}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary btn-sm">Add Group</button>
      </form>
    );
  }
}

export default AddGroup;
