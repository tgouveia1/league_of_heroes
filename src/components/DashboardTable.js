import { useEffect } from "react";
import "./DashBoardTable.css";
import { NavLink } from "react-router-dom";
import { PUBLIC_ID } from "../shared/api";
export const DashboardTable = (props) => {
  const { id, name, image, super_power } = props.hero;
  const deleteFunc = props.apagar;
  const [addremfav, favoriteHeroes] = props.favoritos;
  const user = props.user;
  console.log(user);
  return (
    <div className="dashboard-table">
      <table>
        <tbody>
          <tr>
            <td className="coluna1"><b>ID</b></td>
            <td className="coluna2">{id}</td>
            <td rowSpan={4} className="coluna3">
              <button
                disabled={PUBLIC_ID !== user}
                onClick={() => {
                  deleteFunc(id);
                }}
              >
                {" "}
                Apagar heroi{" "}
              </button>

              {(!favoriteHeroes.includes(id) && favoriteHeroes.length >= 3) ||
                (favoriteHeroes.includes(id) ? (
                  <button
                    disabled={PUBLIC_ID !== user}
                    onClick={() => addremfav(id)}
                  >
                    Remover Fav
                  </button>
                ) : (
                  <button
                    disabled={PUBLIC_ID !== user}
                    onClick={() => addremfav(id)}
                  >
                    {" "}
                    Adicionar Fav{" "}
                  </button>
                ))}

              <button disabled={PUBLIC_ID !== user}>
                {user === PUBLIC_ID ? (
                  <NavLink to={`/dashboard/edit/${id}`}>Editar</NavLink>
                ) : (
                  "Impossível editar"
                )}
              </button>
            </td>
          </tr>
          <tr>
            <td className="coluna1"><b>Nome</b></td>
            <td className="coluna2">{name}</td>
          </tr>
          <tr>
            <td className="coluna1"><b>Super Poder</b></td>
            <td className="coluna2">
              {super_power === "" ? "N/A" : super_power}
            </td>
          </tr>
          <tr>
            <td className="coluna1"><b>Imagem</b></td>
            <td className="coluna2">
              <img src={image} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
