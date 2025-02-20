import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration } from '@angular/platform-browser';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideClientHydration(), // Adicione esta linha
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);