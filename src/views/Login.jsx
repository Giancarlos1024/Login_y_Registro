import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import '../assets/css/Login.css'

export const Login = () =>{

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    const handleLogeo = (event) => {
        event.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Buscar usuario con el mismo username y password
        const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

        if (usuarioValido) {
            alert("Logeo exitoso");
            navigate("/dashboard");
        } else {
            
            alert("Usuario o contraseña incorrectos");
            setUsername("")
            setPassword("")
        }
    };

    const handleRegistrar = () =>{
        navigate("/registrar")
    } 

    return(
        <div className="loginContenedor-padre">
            <section className="loginContenedor-hijo">
                <section className="login-bienvenida">
                    <div>
                        <h1 className="TituloBienvenida">Hola!!! </h1>
                    </div>
                    <div>
                        <p>Crear tu cuenta</p>
                    </div>
                    <div>
                        <button onClick={handleRegistrar}  className="buttonLogin buttonregistrar">Registrar</button>
                    </div>
                </section>
                <section className="login-autenticar">
                    <form onSubmit={handleLogeo} className="formLogin">
                        <div>
                            <h1 className="TituloIniciar">Iniciar Sesion</h1>
                        </div>
                        <div className="iconRedes">
                            <a href="#"><i className='bx bxl-facebook bx-border-circle 'style={{ color: '#228be6' }} ></i></a>
                            <a href="#"> <i className='bx bxl-google bx-border-circle'style={{ color: 'red' }}></i></a>
                            <a href="#"> <i className='bx bxl-linkedin bx-border-circle' style={{ color: '#228be6' }} ></i></a>
                            
                            <p className="opciontextoLogin">o usa tu usuario</p>
                        </div>
                        <div>
                            {/* <label htmlFor="username">Usuario</label> */}
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
                            {/* <label htmlFor="password">Contraseña</label> */}
                            <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            className="camposUsuarioLogin"
                            required
                            />
                        </div>
                        <div className="contenerRegistrate">
                            <NavLink to="/recuperar-password" className="recuperarPas">Olvidaste tu contraseña?</NavLink>
                            <NavLink to="/registrar" className="registrateTexto">Registrate</NavLink>
                        </div>
                        <button type="submit" className="buttonLogin">Iniciar Sesion</button>
                    </form>
                </section>
            </section>
        
        </div>
    )
}