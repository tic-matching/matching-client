import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ModalWindow from "./modalwindows";
import Post from "./post";
import PostRead from "./postread";
import {useState} from 'react';
import InfiniteScroll  from "react-infinite-scroller";
import Database from "./lib/database";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

Modal.setAppElement("#root");

export default function Timeline(props){

	//表示するデータ数のカウント
  const [window, setList] = useState([])
	//読み込み判定
	const [hasMore, setHasMore] = useState(true);
	//ループ用関数
	const [loadcount, setLoadCount] = useState(true);
	//データ格納用
	//表示用のリストの中身は書き換えない形で行う（リストが書き換わると）
	const [User, setUser] = useState([]);
	const [Text, setText] = useState([]);
	const [LoadedName, setLName] = useState([]);
	const [LoadedText, setLText] = useState([]);
	const testname = ['あま','いも','うきき','えびさん','おもち','かまきりだぜ','キーマカレー','鍬','け','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	const testtext = ['Asa','Bsaa','Csasa','sasaD','Esas','Fsas','Gsa','saaH','sasI','Jss','Kaa','Lww','Mdsd','dsdsN','Oda','daP','vdQ','Rfr','Sht','Tgt','Ugt','grV','Whr','Xdas','gY','Zhy']

  //項目を読み込むときのコールバック
	//pageは1〜のようなので配列0個めから読み出すために[page-1]
	//配列の中身を変更するとすでにレンダリングされたものの中身まで変わっちゃうみたいなので配列に要素を追加していく形を維持すること
	//ロードは普通にして、表示するか否かをユーザIDをとかで識別するのがいい？
	//照合するのは「ログインしているユーザの「フォローリスト」のID」と「各投稿を行ったユーザのID」に同一のものがあるか（要検討）
  const loadMore = (page) => {
		Database.setData("username")
		setList([...window, page-1])
		setUser([...User, console.log(Database.data.userid)])
		//setUser([...Text, testtext[page-1]])
		setText([...Text, testtext[page-1]])

		//setLName([...LoadedName, 読み込んだデータ])
		//setLText([...LoadedText, 読み込んだデータ])
		//setUser([...User, LoadedName[page-1]])
		//setText([...Text, LoadedText[page-1]])
		setLoadCount(page)
		if(page >= testname.length){
			setHasMore(false);
		}
  }

  //各スクロール要素
  const items = (
    <div>
      {window.map((value) => <Post postText = {Text[value]} postUser = {User[value]}> </Post>)}
    </div>);

	//ロード中に表示する項目
  const loader =<Posted>読み込み中......</Posted>;


	return (
			<Screen>
        <Blank>
				{Database.setData("Domokun")}
        <HomeButton><Link to="/Timeline">ホーム</Link></HomeButton>
        <UserButton><Link to="/Usermatch">マッチング</Link></UserButton>
				<UserinfoBack>
				<UserinfoTopLine/>
				<UserinfoName>
				{Database.data.userid}
				{/*<UserinfoRightLine/>*/}
				</UserinfoName>
				</UserinfoBack>
				</Blank>
        <BlankR></BlankR>
        <PostBack>
				<InfiniteScroll
				loadMore={loadMore}    //項目を読み込む際に処理するコールバック関数
				hasMore={hasMore}         //読み込みを行うかどうかの判定
    		useWindow={false}
				threshold={250}
				loader={loader}>      {/* 読み込み最中に表示する項目 */}
					{items}             {/* 無限スクロールで表示する項目 */}
				</InfiniteScroll>
				</PostBack>
        <PostIcon></PostIcon>
        <ModalWindow/>
			</Screen>
	)
}




const Screen = styled.div`
	font-family: ProximaNova, sans-serif;
	position: relative;
	overflow: hidden;
	background-color: blue;
	display: block;
	width: 100%;
	height: 100%;
	background-color: #83ccd2;
`;

const background = styled.div``;

const Header = styled.div`
	background-color: #000000;
	width: 100%;
	height: 50px;
`;

const Title = styled.div`
	color: #FFFFFF;
	font-size: 40px;
	font-weight: 700;
	border-bottom-color: #FFFFFF;
	border-bottom-width: 1px;
`;

const CatchPhrase = styled.div`
	color: #FFFFFF;
	font-size: 20px;
	font-weight: 700;
	padding: 100px;
`;

const MakeButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	right:0;
	left:0;
	top: 10%;
	margin: auto;
	background-color: #83ccd2;
	width: 200px;
	height: 50px;
	padding: 15px 30px;
	border-radius: 100px;
	cursor: pointer;
	&:hover{
		background-color: #005ead;
		color: #FFFFFF;
		transition: 200ms ease;
	}
`;

const HomeButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	right:0;
	left:0;
	top: 10%;
	margin: auto;
	background-color: #83ccd2;
	width: 50%;
	height: 7%;
	padding: 15px 30px;
	border-radius: 100px;
	cursor: pointer;
	&:hover{
		background-color: #005ead;
		color: #FFFFFF;
		transition: 200ms ease;
	}
`;

const UserButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	right:0;
	left:0;
	top: 20%;
	margin: auto;
	background-color: #83ccd2;
	width: 50%;
	height: 7%;
	padding: 15px 30px;
	border-radius: 100px;
	cursor: pointer;
	&:hover{
		background-color: #005ead;
		color: #FFFFFF;
		transition: 200ms ease;
	}
`;

const Blank = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #EEEEF4;
	left: 0px;
  width: 25%;
  height: 100%;
`;

const UserinfoBack = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
	vertical-align:middle;
  background-color: #FFFFF4;
	left: 0px;
	right:0px;
	bottom: 0px;
  height: 10%;
`;

const UserinfoName = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  background-color: #FFFFF4;
	vertical-align:middle;
	top:50%;
	left:10%;
	transform: translate(0, -50%);
`;

const UserinfoTopLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #000000;
	left: 0px;
	top: 0px;
  width: 100%;
  height: 1px;
`;

const UserinfoRightLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #000000;
	right: 0px;
	top: 0px;
  width: 1px;
  height: 100%;
`;

const BlankR = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #EEEEF4;
  right: 0px;
  width: 25%;
  height: 100%;
`;

const PostIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  background_color: #000000;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  top: 100px;
  height: 50px;
  left: 500px;
  right: 500px;
`;

const PostText = styled.div`
	color: #000000;
	font-size: 20px;
	font-weight: 700;
	padding: 100px;
`;

const PostBack= styled.div`
  position: absolute;
  box-sizing: border-box;
	overflow: auto;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #FFFFFF;
  right: 0;
  left: 0;
	margin: auto;
	margin-left:25%;
	width: 50%;
  height: 130%;
`;

const ModalBack= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #00FFFF;
  right: 400px;
  left: 400px;
  height: 100%;
  z-index: 2;
`;

const Posted= styled.div`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #9999FF;
  right: 400px;
  left: 400px;
  height: 500px;
`;
