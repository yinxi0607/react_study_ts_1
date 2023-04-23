import React, {Component} from 'react';
import _ from 'lodash'
import {Button} from 'antd';

interface P {
    addTodos: (val: string) => void;
    searchTodos: (val: string) => void;
}

interface S {
    val: string;
    searchVal: string;
}

class Tab extends Component<P, S> {

    constructor(props: P) {
        super(props);
        this.state = {
            val: '',
            searchVal: ''
        }
    }

    add = () => {
        this.props.addTodos(this.state.val)
        this.setState({
            val: ''
        })
    }

    // setVal = (e: any) => {
    //     this.setState({
    //         val: e.target.value // val就是input的value值
    //     })
    // }
    setVal = _.throttle((e:any)=>{
        this.setState({
            val: e.target.value
        })
    },100)

    // setSearchVal = (e: any) => {
    //     this.setState({
    //         searchVal: e.target.value // val就是input的value值
    //     })
    // }
    setSearchVal = _.throttle((e: any)=>{
        this.setState({
            searchVal:e.target.value
        })
    },100)

    onSearch = () => {
        this.props.searchTodos(this.state.searchVal)
        this.setState({
            searchVal: ''
        })
    }

    render() {
        const {val,searchVal} = this.state
        return (
            <div>
                <input placeholder="请输入待办任务" value={val} onInput={this.setVal}/><Button onClick={this.add}> 添加 </Button>
                <hr/>
                <input placeholder="请输入查询内容" value={searchVal} onInput={this.setSearchVal}/>
                <Button onClick={this.onSearch}>查询</Button>
            </div>
        );
    }
}

export default Tab;