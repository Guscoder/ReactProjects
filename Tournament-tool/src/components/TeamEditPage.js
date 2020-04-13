import React, { Component } from "react";
import { connect } from "react-redux";
import { editTeam } from "../reducers/TeamsActions";

class TeamEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: this.getTeam(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    console.log("change");
    let team = this.buildTeamFromForm();
    this.setState({ team });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const team = this.buildTeamFromForm();
    this.props.createTeam(team);
  }

  buildTeamFromForm() {
    const form = document.getElementById("edit-team-form");
    const inputs = form.getElementsByTagName("input");

    const name = inputs[0].value;
    const member1 = inputs[1].value;
    const member2 = inputs[2].value;
    const member3 = inputs[3].value;

    const team = {
      name,
      members: [member1, member2, member3],
    };
    return team;
  }

  getTeam() {
    const id = this.props.match.params.id;
    const team = this.props.teams.reduce((found, team) => {
      if (found) {
        return found;
      }
      if (team.id == id) {
        return team;
      }
      return false;
    }, false);
    return team;
  }

  render() {
    const team = this.getTeam();
    if (!team) {
      return (
        <div>
          <h1>Team Detail Error</h1>
          <p>Team not found</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Edit Team</h1>
        <form id="edit-team-form" onSubmit={this.handleSubmit}>
          <p>
            Team Name:
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.team.name}
            />
          </p>
          <p>
            Team Member:
            <input
              onChange={this.handleChange}
              type="text"
              name="member1"
              value={this.state.team.members[0]}
            />
          </p>
          <p>
            Team Member:
            <input
              onChange={this.handleChange}
              type="text"
              name="member2"
              value={this.state.team.members[1]}
            />
          </p>
          <p>
            Team Member:
            <input
              onChange={this.handleChange}
              type="text"
              name="member3"
              value={this.state.team.members[2]}
            />
          </p>
          <p>
            <input type="submit" value="create"></input>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const teams = state.topLevelTeamsStoreSpace.teams;
  return {
    teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTeam: (team) => {
      dispatch(editTeam(team));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamEditPage);
