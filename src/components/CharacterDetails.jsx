import axios from "axios";
import { createSignal, onMount } from "solid-js";

const fetchCharacter = async (characterUrl) => axios.get(characterUrl);

const CharacterDetails = ({ characterUrl }) => {
  const [character, setCharacter] = createSignal();
  onMount(async () => {
    setCharacter((await fetchCharacter(characterUrl)).data);
  });
  return (
    <div class="flex rounded-lg flex-col border">
      <img
        class="rounded-lg"
        src={character()?.image}
        alt={character()?.name}
        loading="lazy"
      />
      <div class="p-4">
        <h2 class="text-center mt-2 text-2xl font-medium">
          {character()?.name}
        </h2>
        <p class=" mt-2 text-xl font-normal">{`From ${
          character()?.origin.name
        }, identifies as ${character()?.gender} of ${
          character()?.species
        } race`}</p>
        <p class=" mt-2 text-xl font-light">
          Current Status: {character()?.status}
        </p>
      </div>
    </div>
  );
};
export default CharacterDetails;