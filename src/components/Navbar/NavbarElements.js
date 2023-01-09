import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  font-size: 1.5em;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  border-radius: 25%;
  padding: 1.5vw;
  margin: 1vw;
  font-size: 1.5em;
  color: #35383a;

  cursor: pointer;
  &.active {
    color: var(--primary4);
    text-shadow: 0.5px 0.5px var(--neutral2);
    text-decoration: none;
    background-color: var(--primary2);
  }
  :hover {
    background-color: var(--primary3);
    transition: 0.3s;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;
