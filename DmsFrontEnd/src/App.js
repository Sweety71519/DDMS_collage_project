import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,useNavigate,useParams,useLocation  } from 'react-router-dom';

import Login from  './Login'
import Dashboard from './components/Dashboard';
import CountryIndex from './components/Master/Country/Index';
import ZoneIndex from './components/Master/Zone/index';
import ZoneCreate from './components/Master/Zone/create';
import ZoneEdit from './components/Master/Zone/edit';
import CountryCreate from './components/Master/Country/Create';
import CountryEdit from './components/Master/Country/Edit';

import StateIndex from './components/Master/State/index';
import StateCreate from './components/Master/State/create';
import StateEdit from './components/Master/State/edit';

import AreaIndex from './components/Master/Area/index';
import AreaCreate from './components/Master/Area/create';
import AreaEdit from './components/Master/Area/edit';

import DistrictIndex from './components/Master/District/index';
import DistrictCreate from './components/Master/District/create';
import DistrictEdit from './components/Master/District/edit';

import CityIndex from './components/Master/City/index';
import CityCreate from './components/Master/City/create';
import CityEdit from './components/Master/City/edit';

import ProductIndex from './components/Master/Product/index';
import ProductCreate from './components/Master/Product/create';
import ProductEdit from './components/Master/Product/edit';

import ModelIndex from './components/Master/model/index';
import ModelCreate from './components/Master/model/create';
import ModelEdit from './components/Master/model/edit';

import EmployeeIndex from './components/Master/employee/index';
import EmployeeCreate from './components/Master/employee/create';
import EmployeeEdit from './components/Master/employee/edit';

import DistributorIndex from './components/Master/Distributor/index';
import DistributorCreate from './components/Master/Distributor/create';
import DistributorEdit from './components/Master/Distributor/edit';

import UserIndex from './components/Master/user/index';
import UserCreate from './components/Master/user/create';
import UserEdit from './components/Master/user/edit';

import TransportIndex from './components/Master/Transport/index';
import TranportCreate from './components/Master/Transport/create';
import TransportEdit from './components/Master/Transport/edit';

import VehicleIndex from './components/Master/Vehicle/index';
import VehicleCreate from './components/Master/Vehicle/create';
import VehicleEdit from './components/Master/Vehicle/edit';

import TehsilIndex from './components/Master/Tehsil/index';
import TehsilCreate from './components/Master/Tehsil/create';
import TehsilEdit from './components/Master/Tehsil/edit';

import UserPrivilage from './components/Master/UserPrivilage/index';

import DoBookingIndex from './components/Transaction/DistributorOrderBooking/Index';
import DoBookingCreate from './components/Transaction/DistributorOrderBooking/Create';
import DoBookingEdit from './components/Transaction/DistributorOrderBooking/Edit';

import DlrBookingIndex from './components/Transaction/DealerOrderBooking/Index';
import DlrBookingCreate from './components/Transaction/DealerOrderBooking/Create';
import DlrBookingEdit from './components/Transaction/DealerOrderBooking/Edit';

import DisptchIndex from './components/Transaction/Dispatch/Index';
import DispatchCreate from './components/Transaction/Dispatch/Create';
import DispatchEdit from './components/Transaction/Dispatch/Edit';

import DistDispReceiveCreate from './components/Transaction/DistributorDispatchReceive/Create';

import DistributorDispatchIndex from './components/Transaction/DistributorDispatch/Index';
import DistributorDispatchCreate from './components/Transaction/DistributorDispatch/Create';
import DistributorDispatchEdit from './components/Transaction/DistributorDispatch/Edit';

import DlrDispReceiveCreate from './components/Transaction/DealerDispatchRecieve/Create';

import Office from './components/Master/office/Index';

import Header from  './components/include/Header';
import Navbar from  './components/include/Navbar';
import Footer from  './components/include/Footer';
import Api from './components/Api/Api';
import UnAuth from './components/UnAuth';
import './App.css'
function App() {
  const navigate = useNavigate();
  const location=useLocation();
  const [alert , setAlert] = useState({ AlertMessage: '', AlertClass: ''})
  const [isAuth , setAuth] = useState(false)
  const [isAcess , myAccess] = useState('Y')
  function toggleAuth(status)
  {
    setAuth(status)
    if(!status)
    {
      localStorage.clear();
    }
  }
 
  function alertMsg(msg,cls)
  {
  setAlert({'AlertMessage':msg,'AlertClass':cls})
  }
  function closeAlert()
   {
    setAlert({'AlertMessage':'','AlertClass':''})
   }

   useEffect(()=>{
   let status=localStorage.getItem('isLoggedIn');
     setAuth(status);
     if(!status)
     {
      navigate('/');
     }
     
     const pathname = window.location.pathname;
     var arrayPath = pathname.split('/');
     var payload={path:arrayPath[1]};
     Api.postData(`/testAccess`, payload).then(res => {
      myAccess(res.data.access)
       if(res.data.access=='N')
       {
         navigate("/unauthorised-access");
        }
      
       /*
      this.state.loading = false;
      if (res.data.status === 200) {
          this.props.Alert(res.data.message, 'success');
      } else {
          this.props.Alert(res.data.message, 'warning')
      }
      */

  }).catch((error) => {
      console.log(error)
  })
    
   },[location.pathname])
 
   let routes=[
    
    {path:"/country",element:<CountryIndex Alert={alertMsg} />},
    {path:"/country/create",element:<CountryCreate Alert={alertMsg} />},
    {path:"/country/edit/:id",element:<CountryEdit Alert={alertMsg} />},

    {path:"/state",element:<StateIndex Alert={alertMsg} />},
    {path:"/state/create",element:<StateCreate Alert={alertMsg} />},
    {path:"/state/edit/:id",element:<StateEdit Alert={alertMsg} />},

    {path:"/zone",element:<ZoneIndex Alert={alertMsg} />},
    {path:"/zone/create",element:<ZoneCreate Alert={alertMsg} />},
    {path:"/zone/edit/:id",element:<ZoneEdit Alert={alertMsg} />},

    {path:"/area",element:<AreaIndex Alert={alertMsg} />},
    {path:"/area/create",element:<AreaCreate Alert={alertMsg} />},
    {path:"/area/edit/:id",element:<AreaEdit Alert={alertMsg} />},
 
    {path:"/district",element:<DistrictIndex Alert={alertMsg} />},
    {path:"/district/create",element:<DistrictCreate Alert={alertMsg} />},
    {path:"/district/edit/:id",element:<DistrictEdit Alert={alertMsg} />},
 
    {path:"/city",element:<CityIndex Alert={alertMsg} />},
    {path:"/city/create",element:<CityCreate Alert={alertMsg} />},
    {path:"/city/edit/:id",element:<CityEdit Alert={alertMsg} />},
 
    {path:"/tehsil",element:<TehsilIndex Alert={alertMsg} />},
    {path:"/tehsil/create",element:<TehsilCreate Alert={alertMsg} />},
    {path:"/tehsil/edit/:id",element:<TehsilEdit Alert={alertMsg} />},

    {path:"/product",element:<ProductIndex Alert={alertMsg} />},
    {path:"/product/create",element:<ProductCreate Alert={alertMsg} />},
    {path:"/product/edit/:id",element:<ProductEdit Alert={alertMsg} />},
 
    {path:"/model",element:<ModelIndex Alert={alertMsg} />},
    {path:"/model/create",element:<ModelCreate Alert={alertMsg} />},
    {path:"/model/edit/:id",element:<ModelEdit Alert={alertMsg} />},
 
    {path:"/employee",element:<EmployeeIndex Alert={alertMsg} />},
    {path:"/employee/create",element:<EmployeeCreate Alert={alertMsg} />},
    {path:"/employee/edit/:id",element:<EmployeeEdit Alert={alertMsg} />},
 
    {path:"/stockist",element:<DistributorIndex Alert={alertMsg} />},
    {path:"/stockist/create",element:<DistributorCreate Alert={alertMsg} />},
    {path:"/stockist/edit/:id",element:<DistributorEdit Alert={alertMsg} />},
 
    {path:"/user",element:<UserIndex Alert={alertMsg} />},
    {path:"/user/create",element:<UserCreate Alert={alertMsg} />},
    {path:"/user/edit/:id",element:<UserEdit Alert={alertMsg} />},
   
    {path:"/user_privilage",element:<UserPrivilage Alert={alertMsg} />},

    {path:"/transport",element:<TransportIndex Alert={alertMsg} />},
    {path:"/transport/create",element:<TranportCreate Alert={alertMsg} />},
    {path:"/transport/edit/:id",element:<TransportEdit Alert={alertMsg} />},
 
    {path:"/vehicle",element:<VehicleIndex Alert={alertMsg} />},
    {path:"/vehicle/create",element:<VehicleCreate Alert={alertMsg} />},
    {path:"/vehicle/edit/:id",element:<VehicleEdit Alert={alertMsg} />},
 
    {path:"/dobooking",element:<DoBookingIndex Alert={alertMsg} />},
    {path:"/dobooking/create",element:<DoBookingCreate Alert={alertMsg} />},
    {path:"/dobooking/edit/:id",element:<DoBookingEdit Alert={alertMsg} />},

    {path:"/dlrbooking",element:<DlrBookingIndex Alert={alertMsg} />},
    {path:"/dlrbooking/create",element:<DlrBookingCreate Alert={alertMsg} />},
    {path:"/dlrbooking/edit/:id",element:<DlrBookingEdit Alert={alertMsg} />},

    {path:"/dispatch",element:<DisptchIndex Alert={alertMsg} />},
    {path:"/dispatch/create",element:<DispatchCreate Alert={alertMsg} />},
    {path:"/dispatch/edit/:id",element:<DispatchEdit Alert={alertMsg} />},
    
    {path:"/distributor-dispatch-receiving",element:<DistDispReceiveCreate Alert={alertMsg} />},

    {path:"/distributor-dispatch",element:<DistributorDispatchIndex Alert={alertMsg} />},
    {path:"/distributor-dispatch/create",element:<DistributorDispatchCreate Alert={alertMsg} />},
    {path:"/distributor-dispatch/edit/:id",element:<DistributorDispatchEdit Alert={alertMsg} />},
     
    {path:"/dealer-dispatch-receiving",element:<DlrDispReceiveCreate Alert={alertMsg} />},
     
    ]

   

  return (
    <div className="App">
     {isAuth ? 
      isAcess=='Y' ?
     <>
     <Header changeAuth={toggleAuth} Alertmsg={alert.AlertMessage} Alertcls={alert.AlertClass} 
     closeAlert={closeAlert}/> 
      <Navbar/> 
       <Routes>
         {routes.map((route=>
        <Route exact path={route.path} element={route.element} /> 
            ))} 
       </Routes>
         <Footer/> 
           </>
           : <Routes><Route exact path="/unauthorised-access" element={<UnAuth Alert={alertMsg} />} /> </Routes>
         
         :<Routes> <Route exact path="/" element={<Login  changeAuth={toggleAuth}   navigation={navigate} />}/> </Routes>  }
      
       
    </div>
  );
}

export default App;