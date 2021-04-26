// react component are ALWAYS spelled with a capital letter
// and they can have a filename extension of .js or .jsx, .jsx is preferred

// every react component MUST output from its return statement a SINGLE element

const Heading = (props) => {
    // this is called a React Fragment
    console.log(props)
    return (
        <>
            <h1>Welcome to my website!</h1>
            <h2>This is the {props.subtitle} section</h2>
        </>
    )
}

export const name = 'Stefano'

// export const greetUser = (userName) => `Hello ${userName}`

export default Heading // the default export can be ONLY ONE