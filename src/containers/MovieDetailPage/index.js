import React, { Component } from 'react'
import styled from 'styled-components';

import axiosInstance from '../../axios'

const Wrapper = styled.div`
padding: 125px;
display: flex;
flex-direction: row;
@media (max-width: 768px) {
    padding: 32px;
    flex-direction: column;
}
`

const WrapperDetail = styled.div`
display: flex;
flex-direction: column;
padding:36px;

@media (max-width: 768px) {
    padding: 16px;
}
`

const BackButton = styled.button`
background: #00bf71;
border-radius: 4px;
color: #fff !important;
padding: 10px 36.8px !important;
border:none;
width:25%;
margin-top:32px;
cursor:pointer;

@media (max-width: 768px) {
    width:100%;
    padding: 16px;
}
`



class MovieDetailPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            keyword: ''
        };
    }

    componentWillMount() {
        axiosInstance.get('', { params: { i: this.props.location.pathname.split('/')[2] } })
            .then(res => {
                this.setState({ movie: res.data })
            })
    }

    render() {
        const { movie } = this.state;
        const movieData = movie ? movie : 'memuat';
        console.log(movieData);
        return (
            <Wrapper>
                <img src={movieData.Poster} alt="movie-poster" />
                <WrapperDetail>
                    <h1>{movieData.Title}</h1>
                    <div>{movieData.Plot}</div>
                    <br />
                    <div>Released:</div>
                    <div>{movieData.Released}</div>
                    <br />
                    <div>Actor:</div>
                    <div>{movieData.Actors}</div>
                    <br />
                    <div>Awards:</div>
                    <div>{movieData.Awards}</div>
                    <br />
                    <div>Ratings:</div>
                    {!!movieData.Ratings && movieData.Ratings.map(rating => {
                        return <div>- {`${rating.Source} : ${rating.Value}`}</div>
                    })}
                    <BackButton onClick={() => this.props.history.replace(`/movies/`)}>Back</BackButton>
                </WrapperDetail>
            </Wrapper>
        );
    }
}


export default MovieDetailPage;