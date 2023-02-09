const useService = () => {
  const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  };

  const getAllCharacters = async (
    offset = [1, 2, 3, 4, 5, 6, 7, 8],
    status = ""
  ) => {
    const res1 = await getResourse(
      `https://rickandmortyapi.com/api/character/${offset}`
    );
    const res2 = await getResourse(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );

    if (status !== "") {
      return res2.results.map(_transformCharacter);
    } else {
      return res1.map(_transformCharacter);
    }
  };

  const getStatusCharacters = async (status) => {
    const res = await getResourse(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );
    return res.results.map(_transformCharacter);
  };

  const _transformCharacter = (item) => {
    return {
      name: item.name,
      id: item.id,
      gender: item.gender,
      location: item.location.name,
      species: item.species,
      status: item.status,
      image: item.image,
    };
  };

  return { getAllCharacters, getStatusCharacters };
};

export default useService;
