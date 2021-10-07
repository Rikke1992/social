import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
    status: !this.props.status ? "enter your status" : this.props.status,
  };

  element = (e) => {
    let value = e.currentTarget.value;
    let newState = { ...this.state };
    newState.status = value;
    this.setState(newState);
  };

  activateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  DeactivateEditMode = (e) => {
    let value = e.currentTarget.value;
    this.setState({
      editMode: true,
    });
    this.props.profilePutStatusThunk(value);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status != prevState.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    if (this.state.editMode) {
      return (
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
        </div>
      );
    } else {
      return (
        <div>
          <input
            onChange={this.element}
            onBlur={this.DeactivateEditMode}
            value={this.state.status}
          ></input>
        </div>
      );
    }
  }
}
/*   <div>
      <span>{props.profileStatus}</span>
      <input value={props.profileStatus}></input>
    </div> */

export default ProfileStatus;
