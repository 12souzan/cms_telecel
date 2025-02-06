import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add_Service from './pages/Add_Service';
import Service from './pages/Service';
import './index.css'
import Edit_Service from './pages/Edit_Service';
import Service_Details from './pages/Service_Details';
import Not_Found from './pages/Not_Found';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Service />}/>
          <Route path="/add_service" element={<Add_Service/>}/> 
          <Route path="/edit_service/:id" element={<Edit_Service/>} />
          <Route path="/service_details/:id" element={<Service_Details/>} />
          <Route path="*" element={<Not_Found/>} />
        </Routes>
    </Router>
  )
}

export default App
