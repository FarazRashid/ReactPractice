import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={"nav"} bg={"coral"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"lightblue"}>
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"gold"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
