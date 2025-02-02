import React from 'react'
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import '../assets/css/Registrate.css'

export const Registrar = () => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_repetir, setPassword_repetir] = useState("")

    let navigate = useNavigate()

    const handleLogeo = () =>{
        navigate("/")
        
    }

    const handleRegistrar = (event) => {
        event.preventDefault();
    
        if (password !== password_repetir) {
            alert("Las contraseñas no coinciden");
            return;
        }
        const usuario = {
            name,
            lastname,
            email,
            username,
            password
        };
        // Obtener usuarios existentes de localStorage o inicializar un array vacío
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        // Verificar si el username ya existe
        const usuarioExistente = usuarios.find(user => user.username === username);
        if (usuarioExistente) {
            alert("El usuario ya está registrado");
            return;
        }
        // Agregar el nuevo usuario al array
        usuarios.push(usuario);
        // Guardar el array actualizado en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
        alert("Registro exitoso");
        navigate("/");
    };
    

    return (
        <div className="loginContenedor-padre">
            <section className="loginContenedor-hijo registrateContenedor">
                <section className="register-bienvenida">
                    <div>
                        <h1 className="TituloBienvenida">Hola!!! </h1>
                    </div>
                    <div className='textoRegisterBienvenida'>
                        <p>¿Si tienes una cuenta, inicia sesión con tu cuenta?</p>
                    </div>
                    <div>
                        <button onClick={handleLogeo}  className="buttonLogin buttonregistrar">Iniciar Sesion</button>
                    </div>
                </section>
                <section className="login-autenticar register-crear">
                    <form onSubmit={handleRegistrar} className="formLogin">
                        <div>
                            <h1 className="TituloIniciar">Registrate</h1>
                        </div>
                        <div className="iconRedes">
                            <a href="#"><i className='bx bxl-facebook bx-border-circle 'style={{ color: '#228be6' }} ></i></a>
                            <a href="#"> <i className='bx bxl-google bx-border-circle'style={{ color: 'red' }}></i></a>
                            <a href="#"> <i className='bx bxl-linkedin bx-border-circle' style={{ color: '#228be6' }} ></i></a>
                            
                        </div>
                        <div>
                            
                            <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nombres"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div>
                            
                            <input 
                            type="text" 
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Apellidos"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div>
                            
                            <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div>
                           
                            <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Usuario"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div>
                          
                            <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div>
                           
                            <input 
                            type="password" 
                            value={password_repetir}
                            onChange={(e) => setPassword_repetir(e.target.value)}
                            placeholder="Confirmar contraseña"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div className="contenerRegistrate contenerMovil">
                            <p>¿Si tienes cuenta?<NavLink to="/" className="registrateTexto">Iniciar Sesión</NavLink></p> 
                        </div>
                        <button type="submit" className="buttonLogin">Registrar</button>
                    </form>
                </section>
            </section>

        </div>
    )
}
