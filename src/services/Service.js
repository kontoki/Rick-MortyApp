import { useHttp } from "../hooks/http.hook";

const useService = () => {
  const { loading, error, request } = useHttp();

  const getAllCharacters = async (
    offset = [1, 2, 3, 4, 5, 6, 7, 8],
    status = "",
    gender = "",
    species = "",
    name = ""
  ) => {
    const resOffset = await request(
      `https://rickandmortyapi.com/api/character/${offset}`
    );
    const resName = await request(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const resStatus = await request(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );
    const resGender = await request(
      `https://rickandmortyapi.com/api/character/?gender=${gender}`
    );
    const resSpecies = await request(
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
      if (Array.isArray(resOffset)) {
        return resOffset.map(_transformCharacter);
      } else if (resOffset["results"] !== undefined) {
        return resOffset.results;
      }
      return resOffset;
    }
  };

  const getCharacter = async (id) => {
    const res = await request(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return _transformCharacter(res);
  };

  const getAllLocations = async (
    offset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    name = "",
    type = "",
    dimension = ""
  ) => {
    if (name !== "" && type === "" && dimension === "") {
      const locationName = await request(
        `https://rickandmortyapi.com/api/location/?name=${name}`
      );
      return locationName.results;
    }
    if (name === "" && type !== "" && dimension === "") {
      const locationType = await request(
        `https://rickandmortyapi.com/api/location/?type=${type}`
      );
      return locationType.results;
    }
    if (name === "" && type === "" && dimension !== "") {
      const locationDimension = await request(
        `https://rickandmortyapi.com/api/location/?dimension=${dimension}`
      );
      return locationDimension.results;
    } else {
      const res = await request(
        `https://rickandmortyapi.com/api/location/${offset}`
      );

      return res;
    }
  };

  const getSingleLocation = async (id) => {
    const res = await request(`https://rickandmortyapi.com/api/location/${id}`);

    return res;
  };

  const getAllEpisodes = async (
    offset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    name = ""
  ) => {
    if (name !== "") {
      let episodeName = await request(
        `https://rickandmortyapi.com/api/episode/?name=${name}`
      );
      return episodeName.results;
    } else {
      const res = await request(
        `https://rickandmortyapi.com/api/episode/${offset}`
      );

      return res;
    }
  };

  const getSingleEpisode = async (id) => {
    const res = await request(`https://rickandmortyapi.com/api/episode/${id}`);

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
    getSingleLocation,
    loading,
    error,
  };
};

export default useService;
