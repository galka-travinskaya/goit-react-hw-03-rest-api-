function fetchPokemon(name) {
  return (
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      //обрабатываем ошибки с бекенда
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Покемона с именем ${name} нет`));
      })
  );
}

const api = {
  fetchPokemon,
};

export default api;
