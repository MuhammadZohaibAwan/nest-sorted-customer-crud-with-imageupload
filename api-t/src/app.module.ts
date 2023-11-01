import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/entities/customer.entity';
import { MulterModule } from '@nestjs/platform-express/multer';
@Module({
  imports: [MulterModule.register({
    dest: '../uploads',
    limits: {
      fileSize: 4 * 1024 * 1024, // 4MB
    }
  }),
    CustomerModule, 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost', 
    port: 5432,
    password: 'secret',
    username: 'admin', 
    entities: [Customer],
    database: 'postgres_db',
    synchronize: true,
    logging: true,
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }