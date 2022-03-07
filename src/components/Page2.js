import React from 'react'

function Page2(props) {
  return (
    <div>
        <h1>Welcome {props.data[0].name}</h1>
        <h3>Loggined using {props.data[1]}</h3>
    </div>
  )
}

export default Page2