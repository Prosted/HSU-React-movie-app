import movieData from "../MovieData.json";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import MovieCards from "../components/MovieCards";

export default function Main() {
  const genres = ["드라마", "사극", "액션", "스릴러", "SF"];
  return (
    <MainWrapper>
      <NavBar />
      <Body>
        {genres.map((genre) => {
          const filteredData = movieData.filter((data) => data.genres.includes(genre));
          return (
            <CardsWrapper>
              <Description>{genre}</Description>
              <MovieCards movieData={filteredData} />
            </CardsWrapper>
          );
        })}
      </Body>
      <Footer>
        <FooterImg src="./assets/images/footer.png" />
      </Footer>
    </MainWrapper>
  );
}
const Footer = styled.div`
  text-align: center;
  margin-top: 45px;
`;
const FooterImg = styled.img`
  width: 750px;
`;
const CardsWrapper = styled.div`
  margin-top: 35px;
`;

const Body = styled.div`
  width: 90%;
  margin: 25px auto;
`;

const Description = styled.div`
  color: white;
  margin-bottom: 10px;
  font-size: 18px;
`;

const CardWrapper = styled.div`
  width: 100%;
`;
const MainWrapper = styled.div`
  height: 100%;
  background-color: #141414;
  font-family: sans-serif;
`;
