import React from 'react';

class Hello extends React.Component {
    render(){
        const now = new Date();
        return(
            <section>
            <h1>Hello World!</h1>
            <h3>{now.toLocaleString()}</h3>
            </section>
        );
    }
}

export default Hello;
