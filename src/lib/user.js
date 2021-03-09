const SERVER_URL = "http://localhost:3000";

export function getUser(id){
	const url = SERVER_URL + "/GetProfile?userid=" + id;
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