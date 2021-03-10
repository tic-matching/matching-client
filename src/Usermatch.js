import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import Modal from "react-modal";
import styled from "styled-components";

import Database from "./lib/database";
import {getUser} from "./lib/user";
import ModalWindow from "./modalwindows";
import Userinfo from "./userinfo";
import LeftMenu from "./components/LeftMenu";

export default function Usermatch(props){
  const [user, setUser] = useState(null);

  useEffect(async () =>{
    const user = await getUser(Database.data.userid);
    console.log(user);
    setUser(user);
  }, [])

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
        <Main>
          <Userinfo
            name={user?.name}
          />
        </Main>
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
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  padding-top: 100px;
`;