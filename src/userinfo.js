import React from 'react';
import styled from "styled-components";

import {GoodButton, BadButton} from "./components/Button";

export default function UserInfo(props){
  return (
    <Container>
      <IconContainer>
        <Icon
          src={props.icon || "https://upload.wikimedia.org/wikipedia/commons/f/f3/Chromium_Material_Icon.png"}
        />
      </IconContainer>
      <TextContainer>
        <NameContainer>
          <Name>{props.name}</Name>
        </NameContainer>
        <SIContainer>
          <SelfIntroduction>{props.introduction || "Hello!!"}</SelfIntroduction>
        </SIContainer>
        <ButtonContainer>
          <GoodButton 
            style={{width: 100}}
          >
            Good!
          </GoodButton>
          <BadButton 
            style={{width: 100}}
          >
            Bad
          </BadButton>
        </ButtonContainer>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #ccffcc;
  width: 100%;
  height: 200px;
  border-bottom: 1px #333 solid;
`;

const IconContainer = styled.div`
  width: 150px;
  height: 100%;
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
  margin: 15px;
`;

const TextContainer = styled.div`
  position: flex;
  width: 700px;
  height: 100%;
`;

const NameContainer = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0 0 20px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const SIContainer = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 0 0 20px;
`;

const SelfIntroduction = styled.div`
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-basis: 200px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 30px;
`;

