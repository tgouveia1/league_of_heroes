import "./Content.css";
import { useState, useEffect } from "react";
import { Heroinfo } from "./Heroinfo";
import { Loader } from "./Loader";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { CriarEditHeroi } from "./CreateEdit";
import {
  getHeroesUser,
  getHeroesUserTop,
  UpdateSuperhero,
  PUBLIC_ID,
  UpdateSuperheroTop,
  getUsers,
} from "../shared/api";

export const Content = () => {
  const [list_of_heroes, setListOfHeroes] = useState([]);
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    getHeroesUser(user).then((res) => {
      console.log(user);
      console.log(res);
      setListOfHeroes(res);
    });

    getHeroesUserTop(user).then((res) => {
      setFavoriteHeroes(res);
    });
    getUsers().then((res) => {
      setUsers(res);
    });
  }, [user]);

  useEffect(() => {
  
    if (!loading && user === PUBLIC_ID) {
      UpdateSuperhero(list_of_heroes);
    }
  }, [list_of_heroes]);

  useEffect(() => {
    if (!loading && user === PUBLIC_ID) {
      UpdateSuperheroTop(favoriteHeroes);
    }
  }, [favoriteHeroes]);

  const submitForm = (novo_heroi, event) => {
    console.log(novo_heroi);
    event.preventDefault();
    setListOfHeroes((heroes) => {
      if (novo_heroi.id == null) {
        return [
          ...heroes,
          {
            id: list_of_heroes[list_of_heroes.length - 1].id + 1,
            name: novo_heroi.name,
            super_power: novo_heroi.super_power,
            image: novo_heroi.image,
          },
        ];
      }
      return heroes.map((item) => {
        if (item.id == novo_heroi.id) {
          return {
            id: novo_heroi.id,
            name: novo_heroi.name,
            super_power: novo_heroi.super_power,
            image: novo_heroi.image,
          };
        }
        return item;
      });
    });
    navigate("/dashboard");
  };

  const selectUser = () => {
    setUser(document.getElementById("user").value);
  };

  return (
    <>
      {loading ? <Loader></Loader> : ""}
      <Routes>
        <Route
          path="/"
          element={
            <section>
              <div>
                <h1>Top-3 Heróis</h1>
                <label htmlFor="user">Utilizador Selecionado</label>
                <select id="user" onClick={() => selectUser()}>
                  <option>Selecione um utilizador</option>
                  {users.map((usern) => (
                    <option key={usern} value={usern}>{usern}</option>
                  ))}
                </select>
                <div className="heroes">
                  {/* {list_of_heroes.map(heroi => <Heroinfo hero={heroi} />)} */}

                  {list_of_heroes.map((heroi) =>
                    favoriteHeroes.includes(heroi.id) ? (
                      <Heroinfo key={heroi.id} hero={heroi} />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </section>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              favoriteHeroes={[favoriteHeroes, setFavoriteHeroes]}
              user={user}
              herois={[list_of_heroes, setListOfHeroes]}
            ></Dashboard>
          }
        />
        <Route
          path="/dashboard/add"
          element={<CriarEditHeroi submit={submitForm}></CriarEditHeroi>}
        />
        <Route
          path="/dashboard/edit/:id"
          element={
            <CriarEditHeroi
              heroList={list_of_heroes}
              submit={submitForm}
            ></CriarEditHeroi>
          }
        />
      </Routes>
    </>
  );
};
