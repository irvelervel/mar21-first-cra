import React from 'react'

// class components are MORE POWERFUL
// they can do MORE THINGS

class AnotherComponent extends React.Component { // React.Component is the main class we want to take inspiration

    state = {
        counter: 0,
        name: 'Leonardo'
    }
    // state is READ-ONLY because the state cannot be modified directly
    // state is the single source of truth in your component
    // if some portions of the UI are bound to it, they will always reflect its values

    clickHandler = () => this.setState({ counter: this.state.counter + 1 })

    nameHandler = () => this.setState({ name: 'Stefano' })

    render() {

        return (
            <>
                <button onClick={this.clickHandler}>INCREASE COUNTER</button>
                <button onClick={this.nameHandler}>CHANGE NAME</button>
                <p>Hello! I'm a class component! The value of the counter is: {this.state.counter}</p>
                {/* use this. everytime you need to point to the state, to the props or to something inside the class */}
                <p>My name is {this.state.name}</p>
            </>
        )
    }
}

export default AnotherComponent