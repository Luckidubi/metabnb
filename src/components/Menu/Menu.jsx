import {
  Box,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  Menu as MenuMobile,
  IconButton,
} from "@chakra-ui/react";

import { FiArrowDown } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import "./Menu.css";

export default function Menu() {
  const MenuBar = () => {
    return (
      <>
        <p>Restaurant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>

        <p>off-grid</p>
        <p>Farm</p>
      </>
    );
  };

  return (
    <>
      <Box className="menu__container  section__padding">
        <Box className="menu__links">
          <MenuBar />
        </Box>

        <Box className="menu__filter">
          <Button rightIcon={<VscSettings />}>Location</Button>
        </Box>

        <Box className="mobile__menu">
          <MenuMobile>
            <MenuButton as={IconButton} icon={<FiArrowDown />}></MenuButton>
            <MenuList>
              <MenuItem> Restaurant</MenuItem>
              <MenuItem>Cottage</MenuItem>
              <MenuItem>Castle</MenuItem>
              <MenuItem>fantast city</MenuItem>
              <MenuItem>beach</MenuItem>
              <MenuItem>Carbins</MenuItem>
              <MenuItem>off-grid</MenuItem>
              <MenuItem>Farm</MenuItem>
            </MenuList>
          </MenuMobile>
        </Box>
      </Box>
    </>
  );
}
