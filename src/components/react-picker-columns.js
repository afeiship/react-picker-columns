import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactPicker from 'react-picker';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }


  get children(){
    const { items,value } = this.props;
    return items.map((col,index)=>{
      const normalized = ReactPicker.normalizeItems(col)
      return (
        <ReactPicker
          key={index}
          items={normalized}
          value={value[index]}
          data-index = {index}
          onChange={this._itemOnChange.bind(this,index)} />
      );
    })
  }

  _itemOnChange = (inIndex,inEvent) => {
    const {value,onChange} = this.props;
    value[inIndex] = inEvent.target.value;
    this.setState({ value: value.slice(0) },()=>{
      onChange({ target: { value } });
    });
  };

  render(){
    const { className,items,value,...props } = this.props;
    return (
      <section {...props} className={ classNames('react-picker-columns',className) }>
        { this.children }
      </section>
    );
  }
}
