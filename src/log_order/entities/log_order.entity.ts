import { Order } from "src/orders/entities/order.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LogOrder {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    link: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(()=>Order, (order)=> order.log_order)
    order: Order
}
