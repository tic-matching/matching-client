import React from 'react';
import styled from "styled-components";

class Userinfo extends React.Component {
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
        <CoverPic>（カバー画像）</CoverPic>
        <ProfileUser>ユーザー名</ProfileUser>
        <ProfileText>自己紹介文(趣味・所属等)</ProfileText>
        <ProfilePic>（アイコン画像）</ProfilePic>
        <GoodButton>Good</GoodButton>
        <BadButton>Bad</BadButton>
      </div>
    );
  }
}
export default Userinfo;

const ProfilePic = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  background-color: #00DDDD;
  right: 875px;
  left: 415px;
  height: 199px;
`;

const ProfileText = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 100;
  text-align: left;
  top: 60px;
  right: 400px;
  left: 575px;
  height: 124px;
`;

const ProfileUser = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 1000;
  text-align: left;
  top: 25px;
  right: 400px;
  left: 575px;
  height: 50px;
`;

const CoverPic= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #CCFFCC;
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

const GoodButton = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  right: 700px;
  top: 135px;
  background-color: #ffb6c1;
  width: 100px;
  height: 50px;
  padding: 15px 30px;
  border-radius: 100px;
  cursor: pointer;
  &:hover{
    background-color: #dc143c;
    color: #FFFFFF;
    transition: 200ms ease;
  }
`;

const BadButton = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  right: 500px;
  top: 135px;
  background-color: #87cefa;
  width: 100px;
  height: 50px;
  padding: 15px 30px;
  border-radius: 100px;
  cursor: pointer;
  &:hover{
    background-color: #0000cd;
    color: #FFFFFF;
    transition: 200ms ease;
  }
`;
