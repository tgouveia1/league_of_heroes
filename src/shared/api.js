const BASE_URL = "https://psw-server.onrender.com/";
export const PUBLIC_ID = "21523";
const PRIVATE_ID = "nilhyk";

export const getUsers = () => {
  return fetch(BASE_URL + "Users/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
};

export const getHeroesUser = (id) => {
  return fetch(BASE_URL + "Users/" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
};

export const getHeroesUserTop = (id) => {
  return fetch(BASE_URL + "Users/" + id + "/top", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
};

export const UpdateSuperhero = (list) => {
  return fetch(BASE_URL + "Users/" + PRIVATE_ID, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
};

export const UpdateSuperheroTop = (list) => {
  return fetch(BASE_URL + "Users/" + PRIVATE_ID + "/top", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
};
