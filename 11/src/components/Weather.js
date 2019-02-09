import React, { Component } from "react";


export default class Weather extends Component {

  render() {
    const { data } = this.props;

    return <div className="data">
      {data.message}
      {data.list.map((item, index) => {
        return (<button
          key={index}
          name={item}>
          {item}
        </button>
        )
      })}
    </div>;
  }
}