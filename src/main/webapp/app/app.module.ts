import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { RadCaseManagerSharedModule, UserRouteAccessService } from './shared';
import { RadCaseManagerAppRoutingModule} from './app-routing.module';
import { RadCaseManagerHomeModule } from './home/home.module';
import { RadCaseManagerAdminModule } from './admin/admin.module';
import { RadCaseManagerAccountModule } from './account/account.module';
import { RadCaseManagerEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RadCaseManagerAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RadCaseManagerSharedModule,
        RadCaseManagerHomeModule,
        RadCaseManagerAdminModule,
        RadCaseManagerAccountModule,
        RadCaseManagerEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RadCaseManagerAppModule {}
