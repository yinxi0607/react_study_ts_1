import React, {Component} from 'react';
import Tab from './components/Tab'
import Content from './components/Content'
import { withForwardRef } from "./hoc";

const HocTab = withForwardRef(Tab)
const HocContent = withForwardRef(Content)

class App extends Component {
    render() {
        return (
            <div>
                <h3>高阶组件</h3>
                <HocTab/>
                <HocContent/>
            </div>
        );
    }
}

export default App;