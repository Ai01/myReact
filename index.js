import React from './src/react/index';
import ReactDOM from './src/reactDom/index.js';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  componentWillUpdate() {
    console.log('update');
  }

  componentWillMount() {
    console.log('mount');
  }

  onClick() {
    for (let i = 0; i < 100; i++) {
      // this.setState({ num: this.state.num + 1 });
      this.setState(prevState => ({ num: prevState.num + 1 }));
    }
  }

  render() {
    return (
      <div onClick={() => this.onClick()}>
        <Welcome name={'baihaihui'} />
        <h1>number: {this.state.num}</h1>
        <button>add</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
