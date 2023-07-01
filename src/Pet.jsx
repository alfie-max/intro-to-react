const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h2>{animal}</h2>
      <h2>{name}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Pet;
