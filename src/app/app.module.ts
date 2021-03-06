import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FirstofPipe } from './firstof.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MyCompComponent, FirstofPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}