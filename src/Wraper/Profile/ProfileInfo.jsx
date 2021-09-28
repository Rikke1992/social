import React from "react";

class ProfileStatus extends React.Component {
  state = { editMode: true };
  activateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    if (this.state.editMode) {
      return (
        <div>
          <span onClick={this.activateEditMode}>
            {this.props.profileStatus}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <input value={this.props.profileStatus}></input>
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
