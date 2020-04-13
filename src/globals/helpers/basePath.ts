import { resolve, join } from 'path';

export const basePath = (): string => {
  return resolve(join(__dirname, '..', '..', '..'));
};
