import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import leftArrow from "../Assets/arrow-right-1.svg";
import rightArrow from "../Assets/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

/*__________________________________________________________________________________________________*/

const Box = styled.section`
  padding: 50px 0;

  .title {
    text-align: center;
    margin-bottom: 30px;
  }

  .row {
    border-radius: 10px;
    height: fit-content;
    position: relative;
    padding-bottom: 50px;

    .swiper-pagination {
      bottom: 0px !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #a7a9ac !important;
    }

    .product {
      border: 1px solid #dddddd;
      border-left-width: 0.5;
      padding: 25px 25px 30px;
      cursor: pointer;
      transition: 0.3s;

      @media (max-width: 767px) {
        padding: 15px 15px 20px;
      }

      &:first-child {
        border-left-width: 1px;
        border-radius: 10px 0 0 10px;
      }

      &:hover img {
        transform: rotate(5deg) scale(1.1);
      }

      img {
        transition: 0.2s;
        width: 100%;
        padding: 0 25px;
      }

      .name {
        display: block;
        margin: 40px 0 30px;
        @media (max-width: 767px) {
          margin: 20px 0;
        }
      }

      .price {
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        font-size: 20px;
        font-weight: 500;
        .oldPrice {
          text-decoration: line-through;
          color: #a7a9ac;
          font-size: 18px;
        }

        @media (max-width: 767px) {
          font-size: 17px;
        }
      }

      .inStock {
        font-size: 14px;
        font-weight: 300;
        color: #a7a9ac;

        @media (max-width: 767px) {
          font-size: 10px;
        }
      }
    }
  }

  .slides {
    display: flex;
    justify-content: center;
    gap: 70px;
    margin-top: -22px;

    .arrow {
      border-radius: 50%;
      border: 1px solid #efefef;
      padding: 5px;
      cursor: pointer;
      transition: 0.2s;
      z-index: 5;
      &:hover {
        background-color: #f6f6f6;
      }
    }

    @media (max-width: 767px) {
      gap: 100px;
      .arrow {
        width: 30px;
      }
    }
  }
`;

/*__________________________________________________________________________________________________*/

const ExploreProducts = () => {
  const { data } = useFetch(
    "https://63189f2cf6b281877c71eab0.mockapi.io/products"
  );
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Box>
      <h2 className="title">Explore Products</h2>

      <div className="container">
        <Swiper
          ref={sliderRef}
          className="row"
          modules={[Pagination, Autoplay]}
          slidesPerView={2}
          breakpoints={{
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={600}
        >
          {data &&
            data.map((product) => (
              <SwiperSlide key={product.id} className="product">
                <Link to={`/${product.id}`}>
                  <img src={product.img[4]} alt="product" />

                  <span className="name">{product.name}</span>

                  <div className="price">
                    <span>${product.priceAfterdiscount}</span>
                    {product.priceAfterdiscount !== product.price && (
                      <span className="oldPrice">${product.price}</span>
                    )}
                  </div>

                  <span
                    className="inStock"
                    style={{
                      color: product.inStock > 0 ? "#36BA5C" : "#D63030",
                    }}
                  >
                    {product.inStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="slides">
          <img
            src={leftArrow}
            alt="left"
            className="arrow"
            onClick={handlePrev}
          />
          <img
            src={rightArrow}
            alt="right"
            className="arrow"
            onClick={handleNext}
          />
        </div>
      </div>
    </Box>
  );
};

export default ExploreProducts;

/*__________________________________________________________________________________________________*/
