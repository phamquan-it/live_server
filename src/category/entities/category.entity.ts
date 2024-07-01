import { Platform } from "src/platforms/entities/platform.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=>Platform, (platform)=> platform.categories)
    platform: Platform;
}
