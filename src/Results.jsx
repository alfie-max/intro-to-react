import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => <Pet key={pet.id} {...pet} />)
      )}
    </div>
  );
};

export default Results;
