import React, { useState } from 'react'
import axiosClient from '../config/axios'

export const Botones = ({setJson}) => {
    
    const obtenerTodos = async () => {
        
        try {
            
                    const {data} = await axiosClient.get("/");
                    
                    if (data.ok) {
                        setJson(data.tickets);
                    }
            
        } catch (error) {
            console.log(error)
        }
    }

   return (
    <div className='botones'>
        <button onClick={obtenerTodos}>Traer todos los tickets</button>
    </div>
  )
}
