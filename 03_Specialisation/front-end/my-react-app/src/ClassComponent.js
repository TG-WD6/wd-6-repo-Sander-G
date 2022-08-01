import React, {Component} from 'react';

export default class ClassComponent extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Dit is een div met gerenderde text</div>)
    return (<div className="comptext">
    <h3>Dit is een ClassComponent</h3>
        {this.props.displaytext}
        {element}
    </div>)
    }
}