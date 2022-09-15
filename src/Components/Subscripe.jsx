import styled from "styled-components";

/*__________________________________________________________________________________________________*/

const Box = styled.section`
  background-color: #f0f0f0;
  text-align: center;
  padding: 100px 0;
  .title {
    font-weight: 300;
    font-size: 30px;
  }
  /*____________________________*/

  .emailInpt {
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    width: 450px;
    padding: 15px 20px;
    margin-top: 35px;
    background-color: transparent;
  }
  /*____________________________*/

  .subscribe {
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 15px 60px;
    margin-left: -20px;
    border: 1px solid #aaaaaa;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #222;
    }
  }

  // Mobile Responsive
  @media (max-width: 767px) {
    padding: 50px 0;
    .title {
      font-size: 13px;
    }
    .emailInpt {
      width: 220px;
      padding: 10px 15px;
      font-size: 10px;
      margin-top: 20px;
    }
    .subscribe {
      padding: 10px 30px;
      font-size: 10px;
    }
  }
`;

/*__________________________________________________________________________________________________*/

const Subscripe = () => {
  return (
    <Box>
      <h1 className="title">
        Subscribe our newsletter to be notified when it’ll be live.
      </h1>
      
      <form>
        <input type="email" placeholder="Email adress" className="emailInpt" />
        <button className="subscribe">Subscribe</button>
      </form>
    </Box>
  );
};

export default Subscripe;

/*__________________________________________________________________________________________________*/
