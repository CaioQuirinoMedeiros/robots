import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Detail from "../components/Detail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
      detail: {}
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  onClickRobot = event => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${event.currentTarget.id}`
    )
      .then(response => response.json())
      .then(user => this.setState({ detail: user }));
  };

  onCloseRobot = event => {
    this.setState({detail: ''})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="app_box">
        <div className="app_header">
          <div className="wrapper-v">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
        </div>
        <div className="content wrapper-h">
          <CardList robots={filteredRobots} clickRobot={this.onClickRobot} />
          <Detail user={this.state.detail} closeRobot={this.onCloseRobot} />
        </div>
      </div>
    );
  }
}

export default App;
