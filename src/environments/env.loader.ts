import { EnvLoader } from 'ngx-env'; // Isso ainda importa o EnvLoader, mas será tratado como any
import { config } from '@app/config/config';

export const envLoader: any = {
  githubToken: config.githubToken || '',
};
