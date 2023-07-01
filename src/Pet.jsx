const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h2>
        {animal} : {name} : {breed}
      </h2>
    </div>
  );
};

export default Pet;
