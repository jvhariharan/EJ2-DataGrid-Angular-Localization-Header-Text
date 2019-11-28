import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GridAllModule} from '@syncfusion/ej2-angular-grids';
import {DropDownListAllModule} from '@syncfusion/ej2-angular-dropdowns'
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DropDownListAllModule,
    GridAllModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
