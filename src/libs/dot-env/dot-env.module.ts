import { Module } from '@nestjs/common';

import { DotEnvService } from './dot-env.service';

@Module({
  providers: [
    {
      provide: 'ENV_PATH',
      useValue: !process.env.NODE_ENV ? '.env' : `.env.${process.env.NODE_ENV}`,
    },
    DotEnvService,
  ],
  exports: [DotEnvService],
})
export class DotEnvModule {}
