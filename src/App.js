import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Google from './components/Google';
import Page2 from './components/Page2';

function App() {
  const [isLoggedin, setIsLoggedin] = React.useState(false)
  const [data, setData] = React.useState(null)
  return (
    <div className="App">
      {isLoggedin ? (
        <Page2 data={data} />
      ) : (
        <div>
          <Google isLoggedin={setIsLoggedin} setData={setData} />
          <Facebook isLoggedin={setIsLoggedin} setData={setData} />
        </div>
      )}
    </div>
  );
}

export default App;
