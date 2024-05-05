import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Ramana Aur Code!</h1>
    </div>
  )
}

/*const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
} */
const anotherUser = "ramana"
const reactElement = React.createElement(
  'a',
  {'href': "https://google.com", target: '_blank' },
  'Click me to visit google',
  anotherUser
)


const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
 
)
