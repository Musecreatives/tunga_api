import { NextFunction, Request, Response } from "express";
import { SuccessResult } from "../middleware/response";
import _try, { _trySync } from "../middleware/try_catch";
import { Todo } from "../modules/todo";


const todo = new Todo();

export class TodoController {


    static async create(req: Request, res: Response, next: NextFunction) {

        const { title, author, dueAt } = req.body;

        const _todo = new Todo(author, title, dueAt);

        const [err, data] = await _try(function () {
            _todo.add()
        });

        if (err) return next(err);

        res.send(new SuccessResult("todo added", 201, data));
    }


    static get(req: Request, res: Response, next: NextFunction) {


        const { id }: any = req.params;

        const [err, data] = _trySync(() => todo.get(id || ""))

        if (err) return next(err);


        return res.send(new SuccessResult("success", 200, data));

    }

    static getByAuthor(req: Request, res: Response, next: NextFunction) {


        const { author }: any = req.params;

        const [err, data] = _trySync(function () { todo.getByAuthor(author || "") })

        if (err) return next(err);


        return res.send(new SuccessResult("success", 200, data));

    }



    static getAll(req: Request, res: Response, next: NextFunction) {


        const [err, data] = _trySync(function () { todo.list() })

        if (err) return next(err);


        return res.send(new SuccessResult("success", 200, data));

    }


}