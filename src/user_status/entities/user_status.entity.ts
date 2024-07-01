import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class UserStatus {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    name_vi: string;

    @OneToMany(() => User,  (user)=> user.user_status)
    users: User[]
}
