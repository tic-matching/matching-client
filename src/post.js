import React from 'react';
import styled from "styled-components";

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <PostBackLine></PostBackLine>
        <PostBackCover></PostBackCover>
        <PostUser>{this.props.name}</PostUser>
        <PostText>{this.props.text}</PostText>
        <PostIcon></PostIcon>
      </Container>
    );
  }
}
export default Post;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ccc;
`;

const PostIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  background-color: #00DDDD;
  top: 25px;
  right: 955px;
  left: 415px;
  height: 65px;
`;

const PostText = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 100;
  text-align: left;
  background-color: #FFFFFF;
  top: 60px;
  right: 400px;
  left: 500px;
  height: 124px;
`;
const PostUser = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 1000;
  text-align: left;
  background-color: #FFFFFF;
  top: 25px;
  right: 400px;
  left: 500px;
  height: 50px;
`;

const PostBackCover= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #FFFFFF;
  right: 400px;
  left: 400px;
  height: 199px;
`;

const PostBackLine= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #000000;
  right: 400px;
  left: 400px;
  height: 200px;
`;
