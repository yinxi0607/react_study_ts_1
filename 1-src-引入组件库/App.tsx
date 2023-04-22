import React, {Component} from 'react';
import {Button} from 'antd';
import './App.less'

class App extends Component {
    render() {
        return (
            <div>
                <p className="box">hello</p>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        );
    }
}

export default App;