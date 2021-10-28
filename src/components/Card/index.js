import React from 'react';
import styled from 'styled-components';


export const Wrapper = styled.button`
position: relative;
top: 0;
width:200px;
height:300px;
margin:24px;
padding:0px;
border-radius:8px;
border:0px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
cursor:pointer;

transition: top ease 0.5s;
:hover {
    top: -10px;
  }

& > img {
    width:100%;
    height:100%;
}

`

const Card = ({ data, onClick, ...props }) => (
    <Wrapper onClick={onClick} {...props}>
        <img src={data.Poster} alt="movie-poster" />
    </Wrapper>
);

export default Card;