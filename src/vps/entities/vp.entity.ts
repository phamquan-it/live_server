import { MemoryVps } from "src/memory_vps/entities/memory_vp.entity";
import { Order } from "src/orders/entities/order.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Vps {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    name_cpu: string

    @Column()
    num_cores_in_use: string

    @Column()
    speed: string

    @Column()
    ipv4: string

    @Column()
    total_memory: string

    @Column()
    free_memory: string

    @Column()
    core: string

    @Column()
    port: string

    @ManyToOne(()=> Order, (order)=> order.vpss)
    order: Order

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @OneToMany(()=> MemoryVps, (memoryvps)=> memoryvps.vps)
    memory_vps: MemoryVps[]
}
