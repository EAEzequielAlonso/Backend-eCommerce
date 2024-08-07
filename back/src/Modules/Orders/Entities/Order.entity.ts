import { Column, PrimaryGeneratedColumn, Entity, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { User } from "../../Users/Entities/User.entity";
import { OrderDetail } from "./OrderDetail.entity";

@Entity({name: "orders"})
export class Order {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({type: Date})
    date: Date


    
    @ManyToOne(() => User, (user) => user.orders)
    user: User;
    
    @OneToOne(() => OrderDetail, {onDelete : "CASCADE" , cascade : true})
    @JoinColumn()
    orderDetails: OrderDetail
}  