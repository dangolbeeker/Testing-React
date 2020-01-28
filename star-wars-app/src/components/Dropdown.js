import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';

const Menu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const dispatch = useDispatch();

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "PLANETS" })}>Planets</DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "STARSHIPS" })}>Starships</DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "VEHICLES" })}>Vehicles</DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "SPECIES" })}>Species</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Menu;