import React from 'react'
import Didi from './components/didi'
import Gege from './components/gege'

class App extends React.Component {
  state = {
    car: 'lsls'
  }
  render() {
    return (
      <div>
        <Gege car={this.state.car} changeCar={this.changeCar}/>
        <Didi car={this.state.car} />
      </div>
    )
  }

  changeCar = (type) => {
    this.setState({ car: type })
  }
}
export default App;
