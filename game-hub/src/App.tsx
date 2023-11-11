import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [genre, setSelectedGenre] = useState<Genre | null>(null);
  const [platform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={genre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={platform}
            onSelectPlatform={(selectedPlatform) => {
              setSelectedPlatform(selectedPlatform);
              console.log(selectedPlatform);
            }}
          />
          <GameGrid selectedGenre={genre} selectedPlatform={platform} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
