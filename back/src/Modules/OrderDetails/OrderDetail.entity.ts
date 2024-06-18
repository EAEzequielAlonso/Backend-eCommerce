import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { Product } from "../Products/Product.entity";
import { Order } from "../Orders/Order.entity";

@Entity({name: "orderdetails"})
export class OrderDetail {
    
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    price: number

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

}