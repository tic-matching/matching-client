import React, {useState} from "react";
import { Link } from 'react-router-dom'
import Modal from "react-modal";
import styled from "styled-components";

import Database from "./lib/database";
import {get} from "./lib/server";
import ModalWindow from "./modalwindows";
import Userinfo from "./userinfo";
import LeftMenu from "./components/LeftMenu";

export default function Usermatch(props){
  return (
    <Screen>
      <Wrapper>
        <Left>
          <LeftMenu
            data={[{
              text: "ホーム",
              link: "/Timeline"
            }, {
              text: "マッチング",
              link: "/Usermatch"
            }, ]}
          />
        </Left>
        <Main></Main>
      </Wrapper>
    </Screen>
  )
}

const Screen = styled.div`
  background-color: #eeeef4;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 850px;
  height: 100%;
  margin: 0 auto;
`;

const Main = styled.div`
  float: right;
  background-color: #ffffff;
  width: 600px;
  height: 100%;
`;

const Left = styled.div`
  float: left;
  background-color: #eeeef4;
  width: 200px;
  height: 100%;
  padding-top: 100px;
`;