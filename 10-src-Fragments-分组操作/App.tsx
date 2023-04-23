import React from 'react';
import ListOne from "./ListOne";
import ListSecond from "./ListSecond";

const arr: number[] = [1,2,3,4,5,6];

function App() {
    return (
        <div>
            <ul>
                {/*{arr.map((item,index) => <li key={index}>{item}</li>)}*/}
                <ListOne/>
                <ListSecond/>
            </ul>
        </div>
    );
}

export default App;