import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import MovieData from "../MovieData.json";
import Movie from '../components/Movie';
import Component from '../components/Star';
import LikeButton from '../components/LikeButton';

export default function MovieInfo() {
  const { id } = useParams();
  


  return (<div>
      <img src={MovieData[id - 1].poster_url} >    
      </img>
      <br></br><br></br>
      
      <Component /> 
      <LikeButton />
      {MovieData[id - 1].title}의 상세정보 페이지입니다  

      가격 : {MovieData[id- 1 ].price} 원
      <br></br>
      
      <br></br><br></br>
      관람등급: {MovieData[id - 1].flim_rating}
      <br></br>
      배급사:   {MovieData[id - 1].distributor}
      <br></br>
      장르:   {MovieData[id - 1].genres}
      <br></br>
      개봉일:   {MovieData[id - 1].release_date}
      <br></br>
      러닝타임: {MovieData[id - 1].runtime}
      <br></br>
      평점 :    {MovieData[id - 1].rating}
      <br></br>
      감독 :    {MovieData[id - 1].director}
      <br></br>
      배우 :    {MovieData[id - 1].actors}
      <br></br> 
      수상작:     {MovieData[id - 1].awards}
      <br></br><br></br>
      줄거리 :  {MovieData[id - 1].summary}
      <br></br><br></br>
      

      트레일러 영상 보기:
      <br></br>
      <iframe width="500" height="400" src={MovieData[id - 1].youtube_trailer_url} title={MovieData[id - 1].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {MovieData[id - 1].youtube_trailer_url}

    



      </div>);



}


