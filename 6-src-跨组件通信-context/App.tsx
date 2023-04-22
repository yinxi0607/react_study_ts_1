import React, {Component} from 'react';
import Father from "./components/Father";
import ctx from "./context"

interface P{}
interface S{
    money: number
}

class App extends Component<P,S> {
    constructor(props:P) {
        super(props);
        this.state= {
            money:2000000
        }
    }
    render() {
        const {money} = this.state
        return (

                <ctx.Provider value={money}>
                    <div>
                    <Father/>
                    </div>
                </ctx.Provider>


        );
    }
}

export default App;