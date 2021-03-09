const SERVER_URL = "http://localhost:3000";

export function getPost(id){
	const url = SERVER_URL + "/GetPost";
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
	}
	return fetch(url, option).then(res => res.json());
}

export function addPost(id, text){
	const url = SERVER_URL + "/InsertPost";
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
		body: JSON.stringify({
			userid: id,
			text: text,
			time: Date.now()
		})
	}
	return fetch(url, option);
}
