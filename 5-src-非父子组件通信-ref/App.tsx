import React, {Component} from 'react';
import Sister from "./components/Sister";
import Brother from "./components/Brother";

class App extends Component {
    brother: any = {} // todo 解决ts声明问题

    kick = () =>{
        // todo 通过ref绑定获取brother组件中的setCryFlag
        this.brother.setCryFlag()
    }
    render() {
        return (
            <div>
                <Sister kick={this.kick}/>
                {/*
                    ref 他的值是一个箭头函数
                    参数el就是Brother组件
                    this.brother = el 将Brother赋值给了this.brother
                    brother是自定义的属性名
                */}
                <Brother ref={el => this.brother = el}/>
            </div>
        );
    }
}

export default App;