import React from "react";
// import ReactDOM from "react-dom";
import {useState} from "react"
import {useAuth} from "./Context/autContext"
import {useHistory}from 'react-router-dom'
import { InputText } from "primereact/inputtext";
import './Style/register.scss';




function Register() {

    const [datos, setDatos] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState();
    const {signup} = useAuth()
    const navigate = useHistory();
   

    const handleInputChange = (event)=>{
        
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
          
        })
    }

    const enviarDatos = async (event)=>{
        event.preventDefault();
        try {
             await signup(datos.email, datos.password)   
             navigate.push('/login');
        } catch (error) {
            setError(error.message)
        }
        
    }






    return (
        <main class="w-full h-full">
		<div class="flex flex-row justify-content-center m-8 w-full h-full">
            
			<div class="flex flex-column align-items-center m-8 w-full h-full">
				<div class="h-30rem">
					<div className="card">

						<div class="text-center mt-4">
							<h1 class="h2">Comenzemos!!</h1>
							<h4 class="m-5">
								Bienvenido!! Ingresa tus datos para comenzar esta nueva experiencia
							</h4>
                            {error && <p>{error}</p>}
						</div>

						<div class="flex flex-row  align-items-start m-7">
							<div class=" card-body align-self-center" >
								<div class="m-sm-4">
									<form class="flex flex-column " id="signup-form"
                                        onSubmit={enviarDatos} >
										<div class="flex flex-column mb-3">
											<h5 class="form-label mb-2 text-2xl">Nombre</h5>
											<InputText id="input-Text" class="form-control input-size" 
                                            type="text" 
                                            name="name" 
                                            placeholder="Enter your name" 
                                            

                                            required/>
										</div>
										<div class="flex flex-column mb-3 ">
											<label class="form-label mb-2 text-2xl">Telefono</label>
											<InputText id="input-Text" class="form-control form-control-lg" 
                                            type="tel" 
                                            name="Telefono" 
                                            placeholder="Ingresa Tu numero Telefonico" 
                                            required/>
										</div>
										<div class="flex flex-column mb-2 text-2xl">
											<label id="email" class=" mb-2 text-2xl">Email</label>
											<InputText id="input-Text" class="h-2rem InputText " 
                                            type="email" 
                                            name="email" 
                                            placeholder="Enter your email" 
                                            onChange={handleInputChange}
                                            required/>
										</div>
										<div class="flex flex-column mb-3">
											<label class="form-label mb-2 text-2xl">Password</label>
											<InputText id="input-Text" 
                                            class="form-control form-control-lg text-2xl" 
                                            type="password" 
                                            name="password" 
                                            placeholder="Enter password" 
                                            onChange={handleInputChange}
                                            required />
										</div>
										<div class="text-center mt-3">
											{/* <!-- <a href="index.html" class="btn btn-lg btn-primary">Sign up</a> --> */}
											<button type="submit" class="btn btn-lg btn-primary">Sign up</button>
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
  
  export {Register};
  