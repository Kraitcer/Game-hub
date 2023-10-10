import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={() => navigate("/")}
        cursor={"pointer"}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
