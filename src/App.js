import "./App.css";

import { useState, useEffect } from "react";

import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const proximaPagina = () => {
    setPage(page + 1);
  };

  const paginaAnterior = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  console.log(page);

  return (
    <div className="App">
      <Characters characterList={characterList} />
      <button onClick={paginaAnterior}>Voltar</button>
      <button onClick={proximaPagina}>Próxima página</button>
    </div>
  );
}

export default App;
