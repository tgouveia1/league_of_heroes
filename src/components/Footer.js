import "./Footer.css"

export const Footer = (props) =>{
    const {info}=props
    return(
        <div id="footer">
            <p>{info.project_name} - Copyright © 2023 by {info.my_name}</p>
        </div>
    )
}