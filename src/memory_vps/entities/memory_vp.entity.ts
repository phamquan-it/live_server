import { Vps } from "src/vps/entities/vp.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MemoryVps {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    size: string;

    @Column()
    used: string;

    @Column()
    avail: string;

    @Column()
    vps_id:number

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(()=> Vps, (vps)=> vps.memory_vps)
    vps: Vps
}
