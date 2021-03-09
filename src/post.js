import React from 'react';
import styled from "styled-components";

class Post extends React.Component {
  constructor(props) {
    super(props);
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
  top: 15px;
  left: 15px;
  height: 70px;
  width: 70px;
`;

const PostText = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 100;
  text-align: left;
  background-color: #FFFFFF;
  top: 35%;
  left: 18%;
`;

const PostUser = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 1000;
  text-align: left;
  background-color: #FFFFFF;
  top: 12.5%;
  right: 20px;
  left: 18%;
`;

const PostBackCover= styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #FFFFFF;
  right: 0;
  left: 0;
  margin:auto;
  height: 199px;
  max-height: 500px;
`;

const PostBackLine= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #000000;
  right: 0px;
  left: 0px;
  height: 1px;
`;
