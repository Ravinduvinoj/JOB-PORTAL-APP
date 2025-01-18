import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ErrorComponent } from './modules/error/error.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { UikitComponent } from './modules/uikit/uikit.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BottomNavbarComponent } from './modules/layout/components/bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './modules/layout/components/footer/footer.component';
import { NavbarComponent } from './modules/layout/components/navbar/navbar.component';
import { SidebarComponent } from './modules/layout/components/sidebar/sidebar.component';
import { SidebarMenuComponent } from './modules/layout/components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './modules/layout/components/sidebar/sidebar-submenu/sidebar-submenu.component';
import { NavbarMenuComponent } from './modules/layout/components/navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './modules/layout/components/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarSubmenuComponent } from './modules/layout/components/navbar/navbar-submenu/navbar-submenu.component';
import { ProfileMenuComponent } from './modules/layout/components/navbar/profile-menu/profile-menu.component';
import { Error404Component } from './modules/error/pages/error404/error404.component';
import { Error500Component } from './modules/error/pages/error500/error500.component';
import { AppNftHeaderComponent } from './modules/dashboard/components/ntf/app-nft-header/app-nft-header.component';
import { NftAuctionsTableItemComponent } from './modules/dashboard/components/ntf/nft-auctions-table-item/nft-auctions-table-item.component';
import { NftAuctionsTableComponent } from './modules/dashboard/components/ntf/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from './modules/dashboard/components/ntf/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from './modules/dashboard/components/ntf/nft-dual-card/nft-dual-card.component';
import { NftSingleCardComponent } from './modules/dashboard/components/ntf/nft-single-card/nft-single-card.component';
import { NftComponent } from './modules/dashboard/pages/nft/nft.component';
import { NavbarMobileMenuComponent } from './modules/layout/components/navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarMobileSubmenuComponent } from './modules/layout/components/navbar/navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableActionComponent } from './modules/uikit/pages/components/table/table-action/table-action.component';
import { TableFooterComponent } from './modules/uikit/pages/components/table/table-footer/table-footer.component';
import { TableHeaderComponent } from './modules/uikit/pages/components/table/table-header/table-header.component';
import { TableRowComponent } from './modules/uikit/pages/components/table/table-row/table-row.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './modules/uikit/pages/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    ErrorComponent,
    LayoutComponent,
    UikitComponent,
    BottomNavbarComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    NavbarMenuComponent,
    NavbarMobileComponent,
    NavbarSubmenuComponent,
    ProfileMenuComponent,
    Error404Component,
    Error500Component,
    NftComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    NftChartCardComponent,
    NftDualCardComponent,
    AppNftHeaderComponent,
    NftSingleCardComponent,
    NavbarMobileMenuComponent,
    NavbarMobileSubmenuComponent,
    ButtonComponent,
    ResponsiveHelperComponent,
    TableActionComponent,
    TableFooterComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
