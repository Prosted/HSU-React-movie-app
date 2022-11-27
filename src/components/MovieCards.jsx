import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrow";

export default function MovieCards({ movieData }) {
  const settings = {
    speed: 500,
    variableWidth: true,
    infinite: false,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <CardWrapper>
      <Slider {...settings}>
        {movieData.map((data) => {
          return <MovieCard movieData={data} />;
        })}
      </Slider>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
`;
