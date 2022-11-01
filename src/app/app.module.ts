import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { IgxTabsModule, IgxGridModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule } from '@infragistics/igniteui-angular';
import { IgxTabsModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxGridModule,
    IgxIconModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCalendarModule,
    IgxCategoryChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
