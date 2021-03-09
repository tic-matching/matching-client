import React from 'react';
import styled from "styled-components";

export default function UserInfo(props){
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <TextContainer>
        <NameContainer>
          <Name>{props.name}</Name>
        </NameContainer>
        <SIContainer>
          <SelfIntroduction>{props.introduction || "Hello!!"}</SelfIntroduction>
        </SIContainer>
      </TextContainer>
    </Container>
  );
}

export default Userinfo;

const Container = styled.div`
  width: 100%;
  height: 500px;
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
`;

const NameContainer = styled.div``;

const Name = styled.div``;

const SIContainer = styled.div``;

const SelfIntroduction = styled.div``;

const Button = styled.div``;
