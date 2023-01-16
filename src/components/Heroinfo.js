export const Heroinfo = (props) => {
    const{name, image}=props.hero
    return (
        <div className="heroContainer">
            <img src={image}/>
            <h3>{name}</h3>
        </div>
    )

}