import { Module } from '@nestjs/common';
import { AuthentController } from './authent.controller';
import { AuthentService } from './authent.service';

@Module({
  controllers: [AuthentController],
  providers: [AuthentService]
})
export class AuthentModule {}
