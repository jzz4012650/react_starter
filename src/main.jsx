require('./main.less');

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return <div>hello world!</div>;
    }
}

ReactDom.render(<App/>, document.querySelector('#container'));