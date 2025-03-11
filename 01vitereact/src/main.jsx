import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
function MyApp(){
  return(
    <div>
    <h1>Custom App! </h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }



const anotherElement = (
  <a href="https://google.com" target = '_blank'>VISIT GOOGLE</a>
) 


const anotheruser = "gopal kafle"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'click me to visit google ',
  anotherElement
)


createRoot(document.getElementById('root')).
render(
  reactElement
)


