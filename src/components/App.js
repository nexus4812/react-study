import React, {Component} from 'react';
import {connect} from 'react-redux'
import {increment, decrement} from "../action";

class App extends Component {
  render() {
      console.log(this.state);

      const props = this.props;
    return (
        <React.Fragment>
          <div>value : {props.value}</div>
          <button onClick={props.increment}>count up</button>
          <button onClick={props.decrement}>count down</button>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value : state.count.value});
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
