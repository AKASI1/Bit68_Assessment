import { useState } from "react";
import styled from "styled-components";
import next from "../Assets/arrow-right.svg";
import prev from "../Assets/arrow-right-1.svg";
import useFetch from "../Hooks/useFetch";

/*__________________________________________________________________________________________________*/

const Box = styled.section`
  position: relative;
  overflow: hidden;

  .slideImg {
    width: 100%;
    @media (max-width: 767px) {
      height: 220px;
      width: fit-content;
      margin-left: -250px;
    }
  }
  /*____________________________*/

  .slide {
    display: block;
    position: absolute;
    width: 30px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ffffffaf;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #a7a9ac;
    }
    &.prev {
      left: 200px;
    }
    &.next {
      right: 200px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  /*____________________________*/

  .dots {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    background-color: white;
    padding: 8px 10px;
    border-radius: 12px;
    display: flex;
    gap: 15px;
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50px;
      cursor: pointer;
    }
    @media (max-width: 767px) {
      padding: 3px 5px;
      gap: 6px;
      bottom: 10px;
      .dot {
        width: 4px;
        height: 4px;
      }
    }
  }
`;

/*__________________________________________________________________________________________________*/

const Header = () => {
  const [slideNum, setSlideNum] = useState(0);
  const { data } = useFetch(
    "https://63189f2cf6b281877c71eab0.mockapi.io/slider"
  );
  /*____________________________*/

  const handleMove = (direction) => {
    let newSlideNum;

    if (direction === "left") {
      newSlideNum = slideNum === 0 ? data.length - 1 : slideNum - 1;
    } else {
      newSlideNum = slideNum === data.length - 1 ? 0 : slideNum + 1;
    }
    setSlideNum(newSlideNum);
  };
  /*____________________________*/

  return (
    <Box>
      <div className="slideshow-container">
        {data ? (
          <img
            src={data[slideNum]?.img}
            alt="slide show"
            className="slideImg"
          />
        ) : (
          <span>Loading...</span>
        )}

        {/* Slide Buttons */}
        <img
          src={prev}
          alt="prev "
          className="prev slide"
          onClick={() => handleMove("left")}
        />
        <img
          src={next}
          alt="next "
          className="next slide"
          onClick={() => handleMove("right")}
        />

        <div className="dots">
          {data?.map((img) => (
            <span
              className="dot"
              key={img.id}
              style={{
                backgroundColor:
                  img.id - 1 === slideNum ? "#A7A9AC" : "#D1D3D4",
              }}
              onClick={() => setSlideNum(img.id - 1)}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Header;

/*__________________________________________________________________________________________________*/
