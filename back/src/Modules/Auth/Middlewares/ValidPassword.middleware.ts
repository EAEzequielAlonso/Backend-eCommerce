import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable ()
export class ValidPasswordMiddleware implements NestMiddleware {
    use (req:Request, res: Response, next: NextFunction) {
        const {ConfirmPassword, password} = req.body;
        if (ConfirmPassword === password)
            next();
        else throw new BadRequestException("El password y su confirmacion no coinciden")
    }
}