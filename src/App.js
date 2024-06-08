import './App.css';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Date from './Components/Date';
import People from './Components/People';
import Blank from './Components/Blank';
import Service from './Components/Service';
import Footer from './Components/Footer';

function App() {
  const [component,setComponent]=useState('');
  const renderComponent=()=>{
    switch (component) {
      case 'Date':
        return <Date/>
        break;
      case 'People':
        return <People/>
        case 'Service':
          return <Service/>
      default:
        return <Blank/>
        break;
    }
  }
  return (
    <div className="App">
        <Sidebar component={component} setComponent={setComponent}/>
        {renderComponent()}
        <Footer/>
    </div>
  );
}

export default App;
