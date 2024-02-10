import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { RepositoriesListingPageComponent } from './components/repositories-listing-page/repositories-listing-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RepositoriesCardComponent } from './components/repositories-card/repositories-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { CacheResolverService } from './services/cache-resolver.service';
import { CacheInterceptor } from './interceptors/cache-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesListingPageComponent,
    SearchBarComponent,
    UserProfileComponent,
    RepositoriesCardComponent,
    LoaderComponent,
    CardLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SkeletonModule,
    
  ],
  providers: [
    CacheResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
