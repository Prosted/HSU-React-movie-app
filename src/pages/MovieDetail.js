import React from 'react';
import { useLocation } from 'react-router-dom'
import Component from '../components/Star';
import LikeButton from '../components/LikeButton';

export default function MovieDetail() {
  const { state } = useLocation();
    
  return (
    <div className="page-container">
      <div style={{display: 'flex'}}>
      <a href={state.youtube_trailer_url}><img style={{width: '300px', height: '450px'}} src={state.poster_url} alt='영화 포스터 이미지' /></a>
        <div>
          <div style={{ fontSize: "32px" }}>{state.title}</div>
          <div style={{ fontSize: "20px" }}><b>가격:</b> {state.price}원</div>
          <div style={{ fontSize: "20px" }}><b>평점:</b> {state.rating}</div>
          <div style={{ fontSize: "20px" }}><b>등급:</b> {state.flim_rating}</div>
          <div style={{ fontSize: "20px" }}><b>국가:</b> {state.country}</div>
          <div style={{ fontSize: "20px" }}><b>배급사:</b> {state.distributor}</div>
          <div style={{ fontSize: "20px" }}><b>장르:</b> {state.genres}</div>
          <div style={{ fontSize: "20px" }}><b>개봉날짜:</b> {state.release_date}</div>
          <div style={{ fontSize: "20px" }}><b>상영시간:</b> {state.runtime}분</div>
          <div style={{ fontSize: "20px" }}><b>감독:</b> {state.director}</div>
          <div style={{ fontSize: "20px" }}><b>주연배우:</b> {state.actors}<br /></div>
          <div style={{ fontSize: "20px" }}><b>줄거리:</b> {state.summary}</div>
          <div style={{ fontSize: "20px" }}><b>수상대회:</b> {state.awards}</div>
        </div>
      </div>
      <div><Component />
      <LikeButton />
      </div>
    </div>
  );  
}
