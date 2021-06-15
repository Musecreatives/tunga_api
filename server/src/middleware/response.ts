import { CustomError } from "./error_handler";

type TCode = 200 | 201;



export class SuccessResult extends CustomError {

    constructor(msg = "Succuss", code: TCode, data: any) {

        super(msg, code, true, data)
    }

}


// export class SuccessResult extends CustomError {

//     constructor(msg = "Succuss", code: TCode, data: any) {

//         super(msg, code, true, data)
//     }

// }