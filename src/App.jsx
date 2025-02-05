import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './pages/Service';
import AddNewService from './pages/AddNewService';
import './index.css'
import EditServicePage from './pages/EditServicePage';
import ServiceDetails from './pages/ServiceDetails';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Service />}/>
          <Route path="/add_service" element={<AddNewService/>}/> 
          <Route path="/edit_service/:id" element={<EditServicePage/>} />
          <Route path="/service_details/:id" element={<ServiceDetails/>} />
        </Routes>
    </Router>
  )
}

export default App
