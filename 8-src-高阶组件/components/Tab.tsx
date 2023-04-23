import React, {Component} from 'react';

interface P{
    fn: ()=>void
}

function Tab ({fn}:P) {
    return (
        <div>
            Tab
            <button onClick={fn}>Tab点击</button>
        </div>
    );
}

export default Tab;