import React from "react";
import dateFormat from "dateformat";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
        {dateFormat(this.state.date, "dddd, dS mmmm yyyy, h:MM:ss TT")}
      </>
    );
  }
}