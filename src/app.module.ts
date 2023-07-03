import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ITShopModule } from './itshop/itshop.module';

@Module({
  imports: [ITShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
