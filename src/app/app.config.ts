import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { FingerprintjsProAngularModule } from '@fingerprintjs/fingerprintjs-pro-angular';  // Correct import

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(FingerprintjsProAngularModule.forRoot({
      loadOptions: {
        apiKey: 'vCXJWh3KFsKVNLdGys5k' 
      }
    }))
  ]
};
