import { diskStorage } from "multer";
import { extname } from "path";
import { Category } from "src/category/entities/category.entity";
import { Service } from "src/service/entities/service.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
const storage = diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = extname(file.originalname);
      callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    },
  });
  
@Entity()
export class Platform {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon:  string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @OneToMany(()=>  Category, (category)=> category.platform)
    categories: Category[]

    @OneToMany(()=>  Service, (service)=> service.platform)
    services: Service[]
}
