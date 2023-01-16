import { NavLink } from "react-router-dom"
import "./Header.css"
import logo from "./logo.png"
export const Header = (props) => {
    const { info } = props
    return (
        <div id="header">
            <div id="conteudo">
                <img src={logo} />
                <div id="titulos">
                    <h1>{info.project_name}</h1>
                    <h3>Desenvolvido por {info.my_name}</h3>
                </div>
            </div>
            <div id="navbar">
                <div className="navbar-item">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/dashboard">DashBoard</NavLink>
                </div>
            </div>
        </div>
    )
}