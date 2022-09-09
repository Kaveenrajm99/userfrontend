import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CustomerLogin from './component/Customer/CustomerLogin';
import Customerregister from './component/Customer/Customerregister';
import Servicelist from './component/Customer/Servicelist';
import Form from './component/Customer/Form';

function App() {
  return (

    <BrowserRouter>
      <div className='container bg-success p-2 text-dark bg-opacity-25 mt-5'>
        <Routes>
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path="/customerregister" element={<Customerregister />} />
          <Route path="/servicelist" element={<Servicelist />} />
          <Route path="/form" element={< Form />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
