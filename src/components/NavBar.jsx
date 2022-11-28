import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <NavBarWrapper>
      <Logo onClick={() => navigate("/")} src="./assets/images/logo.png" />
      <ButtonWrapper>
        <BsSearch color="white" size={20} />
        <BsHeart color="white" size={20} />
        <BiShoppingBag color="white" size={25} />
        <MyMovie>리액트 10팀</MyMovie>
        <MyMovie>화이팅</MyMovie>
      </ButtonWrapper>
    </NavBarWrapper>
  );
}
const MyMovie = styled.div`
  color: white;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`;

const NavBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
