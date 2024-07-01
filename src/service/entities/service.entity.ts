import { ServiceStatus } from "enums/ServiceStatus";
import { Platform } from "src/platforms/entities/platform.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    intitalial_rate: number

    @Column()
    price: number;

    @Column({
        type: 'enum',
        enum: ServiceStatus,
        default: ServiceStatus.ACTIVE
    })
    status: ServiceStatus

    @ManyToOne(()=> Platform, (platform)=> platform.services)
    platform: Platform
}
