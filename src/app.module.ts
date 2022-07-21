import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Trarkinhos:An241609@nest.i235y.mongodb.net/?retryWrites=true&w=majority'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
