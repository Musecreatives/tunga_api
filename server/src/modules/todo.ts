import Database from "./database";




const todoDb = new Database("todo");


export class Todo {


    private id: string;

    private timestamp: number;


    constructor(public author = "", public title = "", public dueAt = "") {
        this.id = this.newId();
        this.timestamp = Date.now();
    }


    newId() {
        return String(Date.now()).split('').sort().join("") + String(Date.now()).substring(0, 5);
    }

    get(id: string) {
        return todoDb.read(id);
    }

    getByAuthor(author: string) {
        return todoDb.readWhere("author", author);
    }

    list() {
        return todoDb.readAll(10);
    }


    async add() {
        await todoDb.create(this.id, this.toJson());
    }


    toJson() {
        return {
            id: this.id,
            title: this.title,
            dueAt: this.dueAt,
            author: this.author,
            timestamp: this.timestamp,
        }
    }


}



