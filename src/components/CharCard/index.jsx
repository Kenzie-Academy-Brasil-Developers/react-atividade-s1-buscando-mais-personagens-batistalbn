import "./style.css";

const CharCard = ({ item }) => {
  return (
    <div
      className="personagem"
      style={
        item.status === "Alive"
          ? { background: "	#87CEFA", borderColor: "#0000ff" }
          : { background: "#FF7F50	", borderColor: "#ff0000" }
      }
    >
      <h3
        className="personagem__nome"
        style={
          item.status === "Alive" ? { color: "#0000FF	" } : { color: "#FF0000	" }
        }
      >
        {item.name}
      </h3>
      <p
        className="personagem__especie"
        style={
          item.status === "Alive" ? { color: "#0000FF	" } : { color: "#FF0000	" }
        }
      >
        {item.species}
      </p>
      <img className="personagem__foto" src={item.image} alt={item.name} />
    </div>
  );
};

export default CharCard;
