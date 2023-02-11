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
    status = "",
    gender = "",
    species = "",
    name = ""
  ) => {
    const resOffset = await getResourse(
      `https://rickandmortyapi.com/api/character/${offset}`
    );
    const resName = await getResourse(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const resStatus = await getResourse(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );
    const resGender = await getResourse(
      `https://rickandmortyapi.com/api/character/?gender=${gender}`
    );
    const resSpecies = await getResourse(
      `https://rickandmortyapi.com/api/character/?species=${species}`
    );

    if (status === "" && gender === "" && species === "" && name !== "") {
      return resName.results.map(_transformCharacter);
    }
    if (status !== "" && gender === "" && species === "" && name === "") {
      return resStatus.results.map(_transformCharacter);
    }
    if (status === "" && gender === "" && species !== "" && name === "") {
      return resSpecies.results.map(_transformCharacter);
    }
    if (gender !== "" && status === "" && species === "" && name === "") {
      return resGender.results.map(_transformCharacter);
    } else {
      return resOffset.map(_transformCharacter);
    }
  };

  const getCharacter = async (id) => {
    const res = await getResourse(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return _transformCharacter(res);
  };

  const getAllLocations = async (
    offset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ) => {
    const res = await getResourse(
      `https://rickandmortyapi.com/api/location/${offset}`
    );

    return res;
  };

  const getAllEpisodes = async (
    offset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ) => {
    const res = await getResourse(
      `https://rickandmortyapi.com/api/episode/${offset}`
    );

    return res;
  };

  const getSingleEpisode = async (id) => {
    const res = await getResourse(
      `https://rickandmortyapi.com/api/episode/${id}`
    );

    return res;
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
      episodes: item.episode,
      origin: item.origin.name,
      type: item.type === "" ? "Type not found" : item.type,
    };
  };

  return {
    getAllCharacters,
    getCharacter,
    getAllLocations,
    getAllEpisodes,
    getSingleEpisode,
  };
};

export default useService;
