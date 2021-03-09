import React from 'react';
import styled from "styled-components";

class PostRead extends React.Component {
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
        <PostReader>もっと読み込む</PostReader>
      </div>
    );
  }
}
export default PostRead;

const PostIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  background-color: #00DDDD;
  top: 25px;
  right: 550px;
  left: 20px;
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
  right: 20px;
  left: 100px;
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
  right: 20px;
  left: 100px;
  height: 50px;
`;

const PostReader= styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #FFFFFF;
  color: #000000;
  right: 400px;
  left: 0px;
  height: 75px;
  &:hover{
		background-color: #335ead;
		color: #FFFFFF;
		transition: 200ms ease;
	}
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
