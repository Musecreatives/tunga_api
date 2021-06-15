
export class CustomError extends Error {

    msg: string;
    code: number;
    status: boolean;
    data?: any;

    constructor(msg: string, code: number, status: boolean, data?: any) {

        super(msg);
        this.msg = msg;
        this.code = code;
        this.status = status;
        this.data = data || null;
    }

    toJson() {
        return {
            msg: this.msg,
            code: this.code,
            status: this.status,
            data: this.data,
        }
    }

}



// 400 ~ bad Request
// 401 ~ Authorization required
// 404 ~ Not Found
// 500 ~ Server Error
// 300 ~ bad Request

export class BadRequest extends CustomError {

    constructor(message?: string, data?: any) {
        super(message || "Bad Request", 400, false, data);
    }

}


export class NotFound extends CustomError {

    constructor(message?: string, data?: any) {
        super(message || "No Found", 404, false, data);
    }

}

