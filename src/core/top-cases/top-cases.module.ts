import { Module } from '@nestjs/common';
import { TopCasesService } from './top-cases.service';
import { TopCasesController } from './top-cases.controller';

@Module({
  controllers: [TopCasesController],
  providers: [TopCasesService]
})
export class TopCasesModule {}
