import logo from './logo.svg'
import './App.css'
import Heading, { name, greetUser } from './components/Heading' // all the exports ASIDE from the default one must use {}
import AnotherComponent from './components/AnotherComponent'

// App is our first React Component
// a React Component can be function that returns some JSX

// react components are independent, encapsulated

const App = () => {
  let studentName = 'Saidev'

  return (
    <div className="App">
      {/* all the classes are declared as classNames -> class === className */}
      <header className="App-header">
        <AnotherComponent />
        <AnotherComponent />
        <Heading subtitle="gallery" />
        {/* every prop we assign to a component will be wrapped in a object by react */}
        {/* that object is going to be passed to the component's function as the first and only parameter */}
        {/* {
          subtitle: 'gallery'
        } */}
        {/* a prop value must be wrapper in curly braces if it's not a string */}
        <Heading subtitle="bio" />
      </header>
    </div>
  )
}

export default App

// PROPS are additional info you're passing to a component during invokation
// STATE is an object present in CLASS COMPONENTS that is useful for KEEPING TRACK of things
