import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding="10px">
        <Image src={logo} boxSize="50px" />
        <Text>Navbar</Text>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}

export default Navbar;
