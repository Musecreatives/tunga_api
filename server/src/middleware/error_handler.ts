
export class CustomError extends Error {

    message: string;
    code: number;
    status: boolean;
    data?: any;

    constructor(message: string, code: number, status: boolean, data?: any) {

        super(message);

        this.message = message;
        this.code = code;
        this.status = status;
        this.data = data || null;
    }

    toJson() {
        return {
            message: this.message,
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

