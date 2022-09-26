const API_LOCATION = "http://localhost:9000/api/";

async function getFromApi(url) {
    return await fetch(API_LOCATION + url);
}

async function postToApi(url, data) {
    return await fetch(API_LOCATION + url, {
        method: "POST",
        body: data
    });
}

async function createRoom(name) {
    let res = await postToApi("create-room", {
        name: name
    });
    return await res.json();
}

async function getStatus(name) {
    let res = await getFromApi("room-status/" + name);
    return await res.json();
}

export default class RoomManager {

    name = ""
    hasError = false;

    constructor(name) {
        this.name = name;
    }

    async create() {
        let data = await createRoom(this.name);
        if(!data.result) this.hasError = true;
    }

    async getStatus() {
        let data = await getStatus(this.name);
        if(!data.result) return this.hasError = true;
        return data
    }

}