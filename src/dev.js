import './dev.scss';
import ReactPickerColumns from './main';

/*===example start===*/

// install: npm install afeiship/react-picker-columns --save
// import : import ReactPickerColumns from 'react-picker-columns'

class App extends React.Component{
  state = {
    items:[
      [1990,1991,1992,1993,1994,1995,1996],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    ],
    value: [ 1990,3,12 ],
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _change = e => {
    console.log(e.target.value.join('-'));
  };


  _click1 = e => {
    console.log('updte items.');
    const {items,value} = this.state;
    items[0] = [1990,2017];
    this.setState({ items: items.slice(0)});
    console.log(value);
  };

  render(){
    return (
      <div className="hello-react-picker-columns">
        <button onClick={this._click1}>Update items</button>
        <ReactPickerColumns onChange={this._change} items={this.state.items} value={this.state.value} ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
