const SERVER_URL = "http://localhost:3000";

export async function resisterUser(data){
	const url = SERVER_URL + "/users";
	const option = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  }
	return fetch(url, option);
}