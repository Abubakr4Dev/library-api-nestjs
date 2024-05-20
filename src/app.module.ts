import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
