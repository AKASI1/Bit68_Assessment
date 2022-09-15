import styled from "styled-components";
import logo from "../Assets/Group 2925.svg";
import search from "../Assets/search-normal.svg";
import profile from "../Assets/profile.svg";
import cart from "../Assets/bag-2.svg";
import menu from "../Assets/menu.svg";
import { Link } from "react-router-dom";

/*__________________________________________________________________________________________________*/

const Box = styled.nav`
  background-color: #1c1c1c;
  color: white;
  padding: 10px;
  @media (max-width: 992px) {
    padding: 15px 10px;
    .logo {
      height: 40px;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      display: none;
      @media (max-width: 992px) {
        display: block;
      }
    }

    .links,
    .options {
      display: flex;
      align-items: center;
      gap: 30px;
      li {
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          border-bottom: 1px solid white;
          padding-bottom: 5px;
        }
      }

      .separator {
        height: 30px;
        width: 0.5px;
        background-color: white;
      }
      @media (max-width: 992px) {
        display: none;
      }
    }
  }
`;

/*__________________________________________________________________________________________________*/

const Navbar = () => {
  return (
    <Box>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <img src={menu} alt="menu" className="menu" />

        <ul className="links">
          <li>Mac</li>
          <li>IPad</li>
          <li>IPhone</li>
          <li>Watch</li>
          <li>Tv</li>
          <li>Accessories</li>
          <li>Offers</li>
          <span className="separator" />
          <li>Support</li>
          <li>Services</li>
          <li>Locations</li>
        </ul>

        <ul className="options">
          <li>
            <img src={search} alt="search" />
          </li>
          <li>
            <img src={profile} alt="profile" />
          </li>
          <li>
            <img src={cart} alt="cart" />
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Navbar;

/*__________________________________________________________________________________________________*/
