import React from 'react';
import styled from "styled-components";

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      postText: "notext",
      postName: "testuser"
    };
    //this.postIcon = this.postIcon.bind(this);
    //this.postText = this.postText.bind(this);
    //this.postName = this.postName.bind(this);
  }

  render() {
    return (
      <div>
        <PostBackLine></PostBackLine>
        <PostBackCover></PostBackCover>
        <PostUser>なまえ</PostUser>
        <PostText>ほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶん</PostText>
        <PostIcon></PostIcon>
      </div>
    );
  }
}
export default Post;

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
