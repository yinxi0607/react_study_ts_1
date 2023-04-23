import React from 'react';

function Hello() {
    const [n,setN] = React.useState<number>(0)
    return (
        <div>
            Hello
            <hr/>
            <button onClick={()=>{
                setN(n=>n+1)
            }}>
                + {n}
            </button>
        </div>
    );
}

export default Hello;