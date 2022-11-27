import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movieData }) {
  const navigate = useNavigate();

  return (
    <CardWrapper onClick={() => navigate(`/movieInfo/${movieData.id}`)}>
      <Thumbnail src={movieData.poster_url} />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin-left: 5px;
`;
const Thumbnail = styled.img`
  height: 200px;
`;
