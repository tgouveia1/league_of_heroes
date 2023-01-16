import './CreateEdit.css';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { PUBLIC_ID } from "../shared/api";

export const CriarEditHeroi = (props) => {
  const { register, handleSubmit } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const user = props.user;
  const heroINeed =
    params.id != undefined
      ? props.heroList.find((hero) => hero.id == params.id)
      : undefined;

  const [formData, setFormData] = useState(
    heroINeed !== undefined
      ? heroINeed
      : {
          id: null,
          image: "",
          name: "",
          super_power: "",
        }
  );

  useEffect(() => {
    console.log(heroINeed);
    register("id", { value: formData.id });
  }, []);

  const handleChange = (event) => {
    setFormData((heroj) => ({
      ...heroj,
      [event.target.name]: event.target.value,
    }));
  };

  const rollBack = () => {
    navigate("/dashboard");
  };

  return (
    <section>
      <div id="container">
        <h1 className='nome'>
          {formData.id != null ? `Editar ${formData.name}` : "Criar herói"}
        </h1>
        <div className="hero-form">
          <form onSubmit={handleSubmit(props.submit)}>
            <label htmlFor="name">Nome</label>
            <input
              {...register("name", {
                required: false,
                onChange: handleChange,
                value: formData.name,
              })}
            />
            <br/><br/>
            <label htmlFor="image">Imagem</label>
            <input
              {...register("image", {
                required: false,
                onChange: handleChange,
                value: formData.image,
                
              })}
            />
            <br/><br/>
            <label htmlFor="super_power">Super Poder</label>
            <input
              {...register("super_power", {
                required: false,
                onChange: handleChange,
                value: formData.super_power,
              })}
            />
            <br/><br/><br/>
            <button type="submit">Guardar</button>
            <button onClick={() => rollBack()}>Cancelar</button>
          </form>
         
        </div>
      </div>
    </section>
  );
};
