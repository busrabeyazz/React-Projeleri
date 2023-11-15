import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md" className="mb-4">
          <NavbarBrand href="/" className="text-white">Blog Sayfam</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/categories">
                <Button color="secondary" outline>Kategoriler</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <Button color="secondary" outline>Hakkında</Button>
              </NavLink>
            </NavItem>
            {/* Diğer butonlar buraya eklenebilir */}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
