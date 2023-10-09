import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
