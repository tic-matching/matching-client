export function getPost(id){
	const SERVER_URL = "http://localhost:3000";
	const url = SERVER_URL + "/InsertProfile";
	const option = {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(id) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
	}
	return fetch(url, option);
}
