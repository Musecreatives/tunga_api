import { CustomError } from "./error_handler";


type IData<T> = [CustomError | null, T | null];


export default async function _try<T>(callback: Function): Promise<IData<T>> {

    try {
        const data: T = await callback();

        return [null, data]

    } catch (err) {
        console.log("TRY ERROR=>", err)
        return [err, null];
    }

}

export function _trySync<T>(callback: Function) {

    try {
        const data: T = callback();

        return [null, data]

    } catch (err) {

        return [err, null];
    }

}

