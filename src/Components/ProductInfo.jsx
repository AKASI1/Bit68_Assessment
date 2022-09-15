import { useState } from "react";
import styled from "styled-components";
import heart from "../Assets/vuesax-linear-heart.svg";
import filledHeart from "../Assets/filledHeart.svg";
import star from "../Assets/star.svg";
import filledStar from "../Assets/filled-star.svg";
import bank from "../Assets/bank.png";
import ship from "../Assets/vuesax-linear-group.svg";
import returning from "../Assets/vuesax-linear-convert-3d-cube.svg";
import leftArrow from "../Assets/arrow-right-1.svg";
import rightArrow from "../Assets/arrow-right.svg";

const Box = styled.section`
  display: flex;
  margin: 70px auto 100px;
  gap: 100px;

  @media (max-width: 992px) {
    flex-direction: column;
    margin: 20px auto -20px;
  }

  .slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 35px;
      color: lightgray;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: #f44336;
      }

      @media (max-width: 992px) {
        top: 80px;
        right: 20px;
      }
    }
    .arrow {
      background-color: #f6f6f6;
      cursor: pointer;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 8px;
      transition: 0.2s;
      &:hover {
        background-color: #eee;
      }

      @media (max-width: 992px) {
        width: 30px;
        padding: 4px;
      }
    }
    .sliderImg {
      width: 80%;
      height: 80vh;
      margin: 0 20px;
      border-radius: 5px;
      @media (max-width: 992px) {
        max-height: 50vh;
        width: 70%;
      }
    }
  }

  .images {
    flex: 1;
    margin-top: 20px;
    display: flex;
    gap: 80px;
    margin-left: -100px;
    height: fit-content;

    .sideImages {
      display: flex;
      flex-direction: column;
      gap: 35px;
      .image {
        width: 80px;
        height: 80px;
        cursor: pointer;
      }
    }

    .mainImage {
      cursor: pointer;
    }

    @media (max-width: 992px) {
      margin-left: 0;
      gap: 0;
      justify-content: space-between;
      align-items: center;

      .sideImages {
        .image {
          width: 35px;
          height: 35px;
        }
      }

      .mainImage {
        max-width: 280px;
      }
    }
  }

  .content {
    flex: 1;

    .infoContainer {
      display: flex;
      justify-content: space-between;
      align-items: start;

      .title {
        display: inline-block;
        color: #888888;
        margin-bottom: 10px;
        font-weight: 500;
      }

      .reviews {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 14px 0;
        .star {
          width: 20px;
        }
        .num {
          margin-left: 4px;
          color: #aaaaaa;
          font-size: 12px;
        }
      }
      .inStock {
        display: block;
        margin: 4px 0 25px;
        font-size: 12px;
        @media (max-width: 992px) {
          font-size: 10px;
        }
      }

      .quantity {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;

        @media (max-width: 992px) {
          margin-bottom: 5px;
          gap: 15px;
        }

        button {
          width: 35px;
          height: 35px;
          border: 1px solid black;
          border-radius: 50%;
          font-size: 20px;
          background-color: white;
          cursor: pointer;
          transition: 0.2s;
          &:hover {
            background-color: #f6f6f6;
          }
        }

        h2 {
          font-weight: 500;
        }
      }

      .fav {
        width: 24px;
        cursor: pointer;
        transition: 0.2s;
      }
    }

    .optionTitle {
      display: inline-block;
      margin-top: 10px;
      font-size: 12px;
      font-weight: 500;
    }
    .optionContainer {
      display: flex;
      gap: 6px;
      margin-top: 8px;
      .option {
        padding: 20px 13;
        width: 115px;
        height: 85px;
        border: 1px solid #c3c3c3;
        border-radius: 10px;
        color: #c3c3c3;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: black;
        }
        &.active {
          border-color: black;
        }

        .optionInfo {
          font-weight: 600;
          &:last-child {
            font-size: 20px;
            font-weight: 400;
          }
        }

        .color {
          width: 37px;
          height: 37px;
          border: 1px solid #707070;
          border-radius: 50%;
          margin-top: 3px;
        }

        @media (max-width: 992px) {
          width: 80px;
          height: 60px;
          padding: 14px 10px;
          font-size: 11px;

          .optionInfo:last-child {
            font-size: 13px;
          }

          .color {
            width: 25px;
            height: 25px;
          }
        }
      }
      &.productColor .option {
        padding: 10px 0;
        @media (max-width: 992px) {
          padding: 0;
        }
      }
    }

    .addCart {
      background-color: #0d4eb7;
      color: white;
      width: 100%;
      padding: 15px 0;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 35px;
    }

    .seperator {
      height: 1px;
      width: 100%;
      background-color: #d8d8d8;
      margin: 25px 0 30px;
    }

    .feature {
      color: #6f6f6f;
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
      @media (max-width: 992px) {
        font-size: 12px;
      }
    }
  }
`;

const ProductInfo = ({ product }) => {
  const [addFav, setAddFav] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, SetOpenSlider] = useState(false);

  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < product.numberOfStars ? filledStar : star}
        alt="star"
        className="star"
      />
    );
  }

  const handleSlide = (direction) => {
    let newSlideNumber;

    if (direction === "right") {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    } else {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <Box className="container">
      {openSlider && (
        <div className="slider">
          <h1
            className="close"
            onClick={() => {
              SetOpenSlider(false);
            }}
          >
            x
          </h1>
          <img
            src={leftArrow}
            alt="left arrow"
            className="arrow"
            onClick={() => {
              handleSlide("left");
            }}
          />

          <img
            src={product.img[slideNumber]}
            alt="Hotel"
            className="sliderImg"
          />

          <img
            src={rightArrow}
            alt="right arrow"
            className="arrow"
            onClick={() => {
              handleSlide("right");
            }}
          />
        </div>
      )}

      <div className="images">
        <ul className="sideImages">
          {product.img.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="product"
              className="image"
              onClick={() => {
                setSlideNumber(idx + 1);
                SetOpenSlider(true);
              }}
            />
          ))}
        </ul>

        <img
          src={product.img[0]}
          alt="main"
          className="mainImage"
          onClick={() => {
            setSlideNumber(0);
            SetOpenSlider(true);
          }}
        />
      </div>

      <div className="content">
        <div className="infoContainer">
          <div className="info">
            <span className="title">APPLE</span>

            <h4 className="name">{product.name}</h4>

            <div className="reviews">
              {stars}
              <span className="num">({product.numberOfReviews} Reviews)</span>
            </div>

            <h1 style={{ color: product.inStock < 1 ? "black" : "#0D4EB7" }}>
              ${product.priceAfterdiscount}
            </h1>

            <span
              className="inStock"
              style={{
                color: product.inStock > 0 ? "#36BA5C" : "#D63030",
              }}
            >
              {product.inStock > 0 ? "In Stock" : "Out of Stock"}
            </span>

            <div className="quantity">
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
              <h2 className="num">{quantity}</h2>
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
            </div>
          </div>

          <img
            src={addFav ? filledHeart : heart}
            alt="heart"
            className="fav"
            onClick={() => setAddFav(!addFav)}
          />
        </div>
        {/* Choose Payment */}
        <div className="payment optionContainer">
          <div className="option">Full Price</div>
          <div className="option">Installments</div>
        </div>
        {/* Choose Bank */}
        <div className="bank optionContainer">
          {[...Array(4)].map((x, idx) => (
            <img key={idx} src={bank} alt="bank" className="option" />
          ))}
        </div>
        {/* Product Type */}
        <span className="optionTitle">Memory</span>
        <div className="productType optionContainer">
          {[...Array(4)].map((x, idx) => (
            <div className="option" key={idx}>
              <span className="optionInfo">128GB</span>
              <span className="optionInfo">${product.priceAfterdiscount}</span>
            </div>
          ))}
        </div>
        {/* Product Color */}
        <span className="optionTitle">Color</span>
        <div className="productColor optionContainer">
          <div className="option">
            <h5>Silver</h5>
            <span className="color" style={{ backgroundColor: "#EDEDED" }} />
          </div>

          <div className="option">
            <h5>Sierra Blue</h5>
            <span className="color" style={{ backgroundColor: "#90BAD1" }} />
          </div>
        </div>
        {/* Choose  Insurance */}
        <span className="optionTitle">Insurance</span>
        <div className="Insurance optionContainer">
          <div className="option">
            <span className="optionInfo">1 year</span>
            <span className="optionInfo">$99.00</span>
          </div>

          <div className="option">
            <span className="optionInfo">2 year</span>
            <span className="optionInfo">$150.00</span>
          </div>
        </div>

        <button
          className="addCart"
          style={{ backgroundColor: product.inStock < 1 ? "black" : "#0D4EB7" }}
        >
          Add to cart
        </button>

        <div className="seperator" />

        <div className="feature">
          <img src={ship} alt="ship" />
          <p className="text">Free shipping, arrives by Tue, Nov 23</p>
        </div>

        <div className="feature">
          <img src={returning} alt="return" />
          <p className="text">
            Free 10-day return window starts Dec 26th Details
          </p>
        </div>
      </div>
    </Box>
  );
};

export default ProductInfo;
