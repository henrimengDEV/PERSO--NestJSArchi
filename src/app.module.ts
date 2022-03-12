import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './core/orders/orders.module';
import { ProductsModule } from './core/products/products.module';
import { ScootersModule } from './core/scooters/scooters.module';
import { TopCasesModule } from './core/top-cases/top-cases.module';
import { UsersModule } from './core/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ScootersModule,
    ProductsModule,
    OrdersModule,
    TopCasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
