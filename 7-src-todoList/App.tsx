import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import "./App.less"

class App extends Component {
    render() {
        return (
            <div>
                <p className="box"></p>
                <TodoList/>
            </div>
        );
    }
}

export default App;