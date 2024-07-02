import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsController } from './platforms.controller';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platform } from './entities/platform.entity';
const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = extname(file.originalname);
    callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});
@Module({
  imports: [
    TypeOrmModule.forFeature([Platform]),
    MulterModule.register({
      storage
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // path to your uploads folder
      serveRoot: '/uploads', // the route at which static files will be served
    }),
  ],
  controllers: [PlatformsController],
  providers: [PlatformsService],
  exports: [TypeOrmModule], // Ensure PlatformRepository is exported
})
export class PlatformsModule {}
