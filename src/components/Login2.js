import React, { useState,useRef } from 'react';
import {  useAuth} from './Context/autContext';
import {useHistory} from 'react-router-dom';
import {Alert} from './DataBase/alert' ;
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import BlockViewer from '../BlockViewer';
import { Messages } from 'primereact/messages';



const Login2 = (props) => {

    const [checked, setChecked] = useState(false);

    const [datos, setDatos] = useState({
        email:'',
        password:''
    });

    const [error, setError] = useState();

    const {login, loginwithGoogle} =  useAuth();
    const navigate = useHistory();
    
    const handleInputChange = (event)=>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event)=>{
        event.preventDefault();
        try {
            await login(datos.email, datos.password);
            console.log('good')
            navigate.push('/maindash')
            
        } catch (error) {
            setError(error.message)
            addErrorMessage(error);
        }
    }

    const handleGoogleSignin = async ()=> {
        try {
            await loginwithGoogle();
            navigate.push('/maindash')
        } catch (error) {
            
            console.log(error)
            setError(error.message)
            addErrorMessage(error);
            
        }
    }

    const message = useRef();

    const addErrorMessage = (error) => {
        message.current.show({ severity: 'error', content: error.message });
    };

  
    
    return(
        
        <div class="  flex flex-column pl-7 m-7 w-5">
            
			<div class="">
			<div class=" ">
				<div class="  ">
                   
                
                <div   className="center align-items-center surface-card p-8 shadow-4 border-round  ">
                    <div className="text-center">
                        <img src="images/blocks/logos/hyper.svg" alt="hyper" height="50" className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a className="p-link font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/register">Create today!</a>
                    </div>
                    {error && <div >
                    <Messages ref={message} />
                    </div>}
                    
                    
                    

                <form id="login-form"
                onSubmit={enviarDatos}>
                    
                        <label htmlFor="email1" className="block text-900 font-medium mb-2">Email</label>
                        <InputText name="email" 
                        id="email1" 
                        type="email" 
                        className="w-full mb-3" 
                        onChange={handleInputChange}
                        required/>

                        <label htmlFor="password1" className="block text-900 font-medium mb-2">Password</label>
                        <InputText name="password"
                        id="password1" 
                        type="password" 
                        onChange={handleInputChange}
                        className="w-full mb-3" />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox inputId="rememberme1" binary className="mr-2" onChange={e => setChecked(e.checked)} checked={checked} />
                                <label htmlFor="rememberme1">Remember me</label>
                            </div>
                            <a className="p-link font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer" href="/forget">Forgot password? </a>
                        </div>

                        <div class= "flex justify-content-evenly">

                        <Button type='submit' 
                        label="Sign In" 
                        icon="pi pi-user" 
                        className=" p-button-lg p-button-secondary" />

                        <Button class="w-11rem"className=" p-button-lg google p-0 p-button-info" 
                        aria-label="Google"
                        onClick={handleGoogleSignin}>
                            <i className="pi pi-google px-2"></i>
                            <span className="px-3">Google</span>
                        </Button>
                    </div>

                    </form>
                
                </div>
                </div>
                </div>
                </div>
                </div>
                

            

    )
       

};

export default React.memo(Login2);