import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';
import { KraftComponent } from './menus/kraft/kraft.component';
import { PaperboardComponent } from './menus/paperboard/paperboard.component';
import { TcpThComponent } from './menus/tcp-th/tcp-th.component';
import { TcpPbComponent } from './menus/tcp-pb/tcp-pb.component';
import { ContentsComponent } from './contents/contents.component';
import { KDomesticComponent } from './menus/kraft/k-domestic/k-domestic.component';
import { KExportComponent } from './menus/kraft/k-export/k-export.component';
import { DuplexComponent } from './menus/paperboard/duplex/duplex.component';
import { PblComponent } from './menus/paperboard/pbl/pbl.component';
import { PbDomesticComponent } from './menus/tcp-pb/pb-domestic/pb-domestic.component';
import { PbExportComponent } from './menus/tcp-pb/pb-export/pb-export.component';
import { ThExportComponent } from './menus/tcp-th/th-export/th-export.component';
import { ThDomesticComponent } from './menus/tcp-th/th-domestic/th-domestic.component';

const appRoutes: Routes = [
  {path: '', component: MenusComponent},
  {path: 'k-domestic', component: KDomesticComponent},
  {path: 'k-export', component: KExportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenusComponent,
    KraftComponent,
    PaperboardComponent,
    TcpThComponent,
    TcpPbComponent,
    ContentsComponent,
    KDomesticComponent,
    KExportComponent,
    DuplexComponent,
    PblComponent,
    PbDomesticComponent,
    PbExportComponent,
    ThExportComponent,
    ThDomesticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
