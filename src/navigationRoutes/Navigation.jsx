
import {BrowserRouter as Router, Routes, Route}from "react-router-dom"
import { Login } from "../views/Login"
import { NotFound } from "../views/NotFound"
import { Registrar } from "../views/Registrar"
import { Dashboard } from "../views/Dashboard"

export const Navigation = () =>{

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registrar" element={<Registrar/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )

}