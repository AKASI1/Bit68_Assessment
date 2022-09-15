import styled from "styled-components";
import logo1 from "../Assets/Group 732.svg";
import logo2 from "../Assets/Group 729.svg";
import logo3 from "../Assets/Group 730.svg";
import logo4 from "../Assets/Group 731.svg";

/*__________________________________________________________________________________________________*/

const Box = styled.footer`
  background-color: #1c1c1c;
  color: white;
  padding-top: 30px;

  .logos {
    display: flex;
    justify-content: center;
    gap: 200px;
    width: 70%;
    margin: auto;
  }
  /*____________________________*/

  .copyright {
    text-align: center;
    padding: 30px 0;
    font-size: 12px;
  }

  // Mobile Responsive
  @media (max-width: 767px) {
    .logos {
      justify-content: space-between;
      gap: 0;
      width: 85%;
      img {
        height: 45px;
      }
    }
    .copyright {
      font-size: 10px;
    }
  }
`;

/*__________________________________________________________________________________________________*/

const Footer = () => {
  return (
    <Box>
      <div className="logos">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
      </div>

      <p className="copyright">Copyright © 2022 - All rights reserved</p>
    </Box>
  );
};

export default Footer;

/*__________________________________________________________________________________________________*/
