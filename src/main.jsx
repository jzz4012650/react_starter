require('./main.less');

import React from 'react';
import ReactDom from 'react-dom';
import Test from './Test.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return <div>hello world!</div>;
    }
}

ReactDom.render(<Test/>, document.querySelector('#container'));