
import React from 'react';
import {useState,useRef} from 'react'
import {useAuth} from "./Context/autContext"
import { Alert } from "./DataBase/alert";
import { Messages } from 'primereact/messages';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
function ForgotPass() {

    const [datos, setDatos] = useState({
        email:'',
    });

    const [error, setError] = useState();

     const {login, loginwithGoogle, resetPass} = useAuth();

     const handleInputChange = (event)=>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleResetPass = async () => { 
        if (datos.email){
            try {
                await resetPass(datos.email);
                setError("hemos enviado el mensaje para reset el correo");
                addErrorMessage(error);
                
            } catch (error) {
                setError(error) 
                addErrorMessage(error);
            }
        }
        
    };

    const message = useRef();

    const addErrorMessage = (error) => {
        message.current.show({ severity: 'success', content: error.message });
    };

    return (
        <main class=" w-full h-full ">
       <div class="flex flex-row justify-content-center m-8 w-full h-full">
            
			<div class="flex flex-column align-items-center m-8 w-full h-full">
				<div class="h-30rem">
					<div className="card">

                        <div class="text-center mt-4">
                            <h1 class="h2">Recupera tu contraseña </h1>
                            <h3 class="lead">
                                Escribe tu correo
                            </h3>
                        </div>

                        <div class=" ">
                            <div class="card-body">
                                <div class="m-sm-4">
                                    <div class="text-center">
                                    
                                    </div>
                                    <form id="login-form" class="max-h-screen " >
                                        <div class="flex flex-column mb-4">
                                        {error && <div >
                                            <Messages ref={message} />
                                         </div>}
                                        {/* {error && <Alert message={error}/>} */}
                                            <h5 >Email</h5>
                                            <InputText id="input-Text"class="form-control form-control-lg" 
                                            type="email" 
                                            name="email"
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            required/>
                                        </div>
                                        
                                        <div class="text-center mt-3">
                                    
                                            <Button  onClick={handleResetPass} type="submit" class="btn btn-lg btn-primary">Enivar
                                            </Button>
                                           
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    );

}

export {ForgotPass};