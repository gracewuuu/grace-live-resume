import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResumeModule } from "./resume/resume.module";
import { CoreModule } from "./core/core.module";

import localeEn from "@angular/common/locales/en";
import localePt from "@angular/common/locales/pt";
import localePtExtra from "@angular/common/locales/extra/pt";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { environment } from "../environments/environment";

import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import * as Hammer from "hammerjs";

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any> {
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

registerLocaleData(localeEn, "en");
registerLocaleData(localePt, "pt-BR", localePtExtra);
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    HammerModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ]
})

export class AppModule {}