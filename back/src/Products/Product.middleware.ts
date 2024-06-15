import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable ()
export class ProductDataMiddleware implements NestMiddleware {
    use (req:Request, res: Response, next: NextFunction) {
        const {name, description, price, stock, imgUrl} = req.body;
        if (name && description && price && stock && imgUrl)
            next();
        res.status(400).json({message: "Faltan datos de Productos"}) 
    }
}