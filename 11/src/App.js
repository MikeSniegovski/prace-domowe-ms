import React, { Component } from 'react';
import './App.css';
import Weather from "./components/Weather";


const settings = {
  appId: 'a9377a74693c77cff6a5e08bab7145ff',
  appUrl: 'https://api.openweathermap.org/data/2.5/forecast',
  // appUrl: 'https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=a9377a74693c77cff6a5e08bab7145ff',

  cities: ['London', 'Berlin', 'Paris', 'Madrid', 'Warszawa'],
}




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      choosedCity: null,
    };
  }

  handleCityChange = (event) => {
    const { name } = event.target;

    this.setState({ choosedCity: name });
    this.getData();
  }

  // componentDidMount() {
  //   this.getData();
  // }

  getData = () => {
    this.setState({
      data: null
    });

    let apiUrl = settings.appUrl + '?q=' + this.state.choosedCity + '&appid=' + settings.appId;

    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ data: resp, }));
  }

  render() {
    const { choosedCity, data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Weather Info
        </header>
        <div className="cities-list">
          <h3>Choose city</h3>
          {settings.cities.map((item, index) => {
            return (<button
              className={choosedCity === item ? "cities-list__item active" : "cities-list__item"}
              key={index}
              name={item}
              onClick={this.handleCityChange}>
              {item}
            </button>
            )
          })}
        </div>
        {choosedCity}
        {/* {data && <Weather data={data} />} */}
        {data !== null ? <Weather data={data} /> : 'Pobieram dane'}

      </div>
    );
  }
}

export default App;
