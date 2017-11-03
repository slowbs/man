import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { KanaComponent } from './components/kana/kana.component';

RouterModule.forRoot([
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'kana',
    component: KanaComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    KanaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'kana',
        component: KanaComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
