import { Injectable, Logger, Inject } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { basePath } from '@globals/helpers/basePath';
import { resolve } from 'path';
@Injectable()
export class DotEnvService {
  private readonly envConfig: Map<string, string>;
  private readonly logger: Logger = new Logger('DotEnvService');
  constructor(@Inject('ENV_PATH') filePath: string) {
    this.envConfig = new Map<string, string>();
    if (filePath !== undefined) {
      const path = resolve(basePath(), filePath);
      if (fs.existsSync(path)) {
        const fileRead = fs.readFileSync(path);
        const fussion = {
          ...dotenv.parse(fileRead),
          ...process.env,
        };
        Object.keys(fussion).forEach(key => {
          this.envConfig.set(key, fussion[key]);
        });
        this.logger.log(`loaded env from ${path}`);
      } else {
        throw new Error(`file ${path} not found`);
      }
    }
  }

  get(key: string, defaultVal: string = null): string | null {
    if (this.envConfig.has(key)) {
      return this.envConfig.get(key);
    }
    return defaultVal;
  }
}
