import CardListOfBreaking from "./CardListOfBreaking";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

const ListOfBreaking = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(
        "https://breakingbadapi.com/api/characters?limit=12&offset=12"
      );

      setCharacters({ ...characters, res });
      localStorage.setItem("char", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(characters.res);
  return (
    <Grid justifyContent="center" container spacing={10}>
      {characters.length === 0
        ? null
        : characters.res.data.map((character) => (
            <Grid item xs={12} md={6} lg={3}>
              <CardListOfBreaking
                key={character.char_id}
                img={character.img}
                name={character.name}
                category={character.category}
                status={character.status}
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default ListOfBreaking;
