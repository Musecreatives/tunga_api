import FileSystem from "fs";

const fs = FileSystem.promises;

const dbLocation = process.cwd() + "/database/";

export default class Database {

    private name: string;
    private db: Array<{ key: any, data: any }>;
    private db_path: string;

    constructor(name: string) {
        this.name = name;
        this.db_path = dbLocation + this.name + ".json";
        this.db = [];
        this.init();
    }


    private async init() {

        FileSystem.exists(this.db_path, async (result) => {

            if (result === false) {
                await fs.writeFile(this.db_path, JSON.stringify([]));
            }

            const data = await fs.readFile(this.db_path, { encoding: 'utf-8' });

            if (!data) return console.warn("No database found for " + this.name);

            this.db = JSON.parse(data);

        })


    }



    async create(key: string, data: any) {
        this.db.push({ key, data: data });
        console.log(this.db.map(e => JSON.stringify(e)));
        await fs.writeFile(this.db_path, JSON.stringify(this.db));
    }


    read(key: string) {
        const data = this.db.find((i) => i.key === key)
        if (!data) return null;
        return data.data;
    }


    async update(key: string, update: any) {
        let data = this.db.find((e) => e.key === key);

        if (!data) return console.error("no matching document for " + key);

        data = { ...data, ...update };

        await fs.writeFile(this.db_path, JSON.stringify(this.db));
    }


    delete() {

    }



}