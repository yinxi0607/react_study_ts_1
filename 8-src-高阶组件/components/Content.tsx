import React, {Component} from 'react';
interface P{
    fn: ()=>void
}
function Content ({fn}:P) {
    return (
        <div>
            Content
            <button onClick={fn}>Content 点击</button>
        </div>
    );

}

export default Content;