import User from "../modules/user";


export default async function _try(callback: Function) {

    try {
        const data = await callback();

        return [null, data]

    } catch (err) {

        return [err, null];
    }

}

export function _trySync(callback: Function) {

    try {
        const data = callback();

        return [null, data]

    } catch (err) {

        return [err, null];
    }

}

