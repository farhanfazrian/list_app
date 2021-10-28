import React, { Component } from 'react'
import styled from 'styled-components';

import Card from '../../components/Card';
import axiosInstance from '../../axios'

const Wrapper = styled.div`
padding: 64px;
display: flex;
flex-direction: column;
align-items: center;
`

const WrapperContent = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`

const WrapperSearch = styled.div`
display:flex;
width:100%;
justify-content:center;
`;

const TextField = styled.input`
width: 50%;
padding: 12px 20px;
margin-bottom:32px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;

@media (max-width: 768px) {
    width:100%;
}
`

const ButtonSearch = styled.button`
padding: 12px;
border: 0px;
border-radius: 4px;
background: #00bf71;
color: white;
cursor: pointer;
height: 40px;
margin-left: 12px;
`

class Movies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            keyword: ''
        };
    }

    componentWillMount() {
        axiosInstance.get('', { params: { s: 'Batman', page: 3 } })
            .then(res => {
                this.setState({ movies: res.data.Search })
            })
    }

    handleKeywordChange = (keyword) => {
        this.setState({ keyword: keyword.target.value });
    }

    handleSearchClick = () => {
        const { keyword } = this.state;
        axiosInstance.get('', { params: { s: keyword } })
            .then(res => {
                this.setState({ movies: res.data.Search })
            })
    }

    render() {
        const { movies, keyword } = this.state;
        return (
            <Wrapper>
                <WrapperSearch>
                    <TextField type="text" value={keyword} placeholder="Movie Name" onChange={e => this.handleKeywordChange(e)} />
                    <ButtonSearch onClick={this.handleSearchClick}>SEARCH</ButtonSearch>
                </WrapperSearch>
                <WrapperContent>
                    {!!movies && movies.map((movie, index) => {
                        return <Card key={index.toString()} data={movie} onClick={() => this.props.history.replace(`/movie/${movie.imdbID}`)} />
                    })}
                    {!movies && <div>Movies Not Found!</div>}
                </WrapperContent>
            </Wrapper>
        );
    }
}

export default Movies;