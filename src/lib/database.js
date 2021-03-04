class Database{
	data = {
		userid: ""
	}

	setData(data){
		this.data = {
			...this.data,
			...data
		};
	}
}

export default new Database();