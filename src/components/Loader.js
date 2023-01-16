import "./Loader.css"
import loader from "./loader.gif"
export const Loader = () => {
    return (
        <div className="loader">
            <div className="loader_gif">
                <img src={loader} />
            </div>
        </div>
    )
}