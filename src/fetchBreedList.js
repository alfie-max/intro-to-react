const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!animal) return [];

  if (!apiRes.ok) {
    throw new Error(`An error has occured: ${apiRes.status}`);
  }

  return apiRes.json();
};

export default fetchBreedList;
