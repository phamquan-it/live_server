import { Category } from "src/category/entities/category.entity";
import { Service } from "src/service/entities/service.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Platform {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon:  string;

    @OneToMany(()=>  Category, (category)=> category.platform)
    categories: Category[]

    @OneToMany(()=>  Service, (service)=> service.platform)
    services: Service[]
}
