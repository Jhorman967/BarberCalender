import React from "react";
import { useAuth } from "../Context/autContext";
import { useHistory } from "react-router-dom";



export function ProtectedRoute({children}){
    const {user, loading} = useAuth()
    const navigate = useHistory()
    if(loading) return <h1>loading</h1>;

    if(!user) return navigate.push("/login");

    return <>{children}</>
}