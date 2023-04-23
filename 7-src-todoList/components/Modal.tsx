import React, {Component} from 'react';
import '../App.less'
import {Button} from "antd";
import _ from "lodash"

interface P{
    close: (e:any)=> void
    activeTask: string
    edit: (newTask: string) => void
}
interface S{
    val: string
}

class Modal extends Component<P,S> {

    constructor(props:P) {
        super(props);
        this.state= {
            val: props.activeTask
        }
    }

    setVal = _.throttle((e: any)=>{
        this.setState({
            val: e.target.value
        })
    },100)

    confirm = (e:any) =>{
        this.props.edit(this.state.val)
        this.props.close(e)
    }

    render() {
        const {close} = this.props
        const {val} = this.state
        return (
            <div className="mask">
                <div className="mask_content">
                    <input value={val} onInput={this.setVal}/>
                    <div className="btn">
                        <Button type="primary" danger onClick={close}>取消</Button>
                        <Button type="primary" onClick={this.confirm}>确定</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;