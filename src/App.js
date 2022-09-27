import React from 'react';
// import logo from './logo.svg';
import './MainDash';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
// import LogIn from './admi_user/logIn';
// import { Register } from './admi_user/register';
// import { AuthProvider } from './context/autContext';
// import Data from './componentes/data';
// import { ProtectedRoute } from './componentes/ProtectedRoute';
// import  {ForgotPass } from './admi_user/fogetpass';
import Login2 from './components/Login2';
import MainDash from './MainDash';
import {Register} from './components/register';
import {AuthProvider}  from './components/Context/autContext'
import { ProtectedRoute } from './components/DataBase/ProtectedRoute';
import {ForgotPass} from "./components/ForgetPass"


function App() {
  return (

    <AuthProvider>
    <BrowserRouter>
    <Switch>
            <Route path='/register' component={Register} />
            <Route path='/forget' component={ForgotPass} />
             
             <Route  exact path='/login' component={Login2} />
             
            <ProtectedRoute>
            <Route path='/maindash' component={
            
                 MainDash
             

                
                }/>
             </ProtectedRoute>
             
             
    </Switch>
           
            
            

      {/* <Route path='/forgetpass' element={<ForgotPass/>} />
      <Route path='/register' element={<Register/>} />
        <Route path='/data' element={
          <ProtectedRoute>
              <Data/>
          </ProtectedRoute> }
           />  
      <Route path='/' element={<LogIn />}/> */}
   </BrowserRouter>
  
   </AuthProvider>
      
    
    
  );
}

export default App;
