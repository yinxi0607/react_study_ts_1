import React, {Component} from 'react';
import Hello from "./components/Hello";

interface P{}
interface S{
    money: number,
}

class App extends Component<P,S> {
    constructor(props:P) {
        super(props);
        this.state = {
            money: 2000
        }
    }
    render() {
        const {money} = this.state
        return (
            <div>
                通过自定义的属性形式绑定在子组件身上<hr/>
                <Hello money={money}/>
            </div>
        );
    }
}

export default App;