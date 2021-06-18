

export default async function _try(callback: Function) {

    try {
        const data = await callback();

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

