import { Order } from 'src/orders/entities/order.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserStatus } from 'src/user_status/entities/user_status.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(()=> Role, (role)=> role.users)
  role: Role

  @ManyToOne(()=> UserStatus, (user_status)=> user_status.users)
  user_status: UserStatus

  @OneToMany(()=>Order,  (order)=> order.user)
  orders: Order[]
}
