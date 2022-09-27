const API_LOCATION = "https://on-pourlpouz.cyclic.app/api/";

async function getFromApi(url) {
    return await fetch(API_LOCATION + url);
}

async function postToApi(url, data) {
    return await fetch(API_LOCATION + url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}

async function createRoom(name) {
    let res = await postToApi("create-room", { name: name });
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

    async nextState() {
        let res = await postToApi("next-state", { name: this.name });
        let json = await res.json();
        if(!json.result) this.hasError = true;
    }

    async sendAnswer(answer) {
        let res = await postToApi("send-answer", { 
            name: this.name ,
            answer: answer
        });
        let json = await res.json();
        if(!json.result) this.hasError = true;
    }

    async getStatus() {
        let data = await getStatus(this.name);
        if(!data.result) return this.hasError = true;
        return data;
    }

}