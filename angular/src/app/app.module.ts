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
import { NavbarMobileMenuComponent } from './modules/layout/components/navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarMobileSubmenuComponent } from './modules/layout/components/navbar/navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './modules/uikit/pages/components/table/table.component';
import { AppNftHeaderComponent } from './modules/dashboard/components/ntf/app-nft-header/app-nft-header.component';
import { NftAuctionsTableComponent } from './modules/dashboard/components/ntf/nft-auctions-table/nft-auctions-table.component';
import { NftDualCardComponent } from './modules/dashboard/components/ntf/nft-dual-card/nft-dual-card.component';
import { NftSingleCardComponent } from './modules/dashboard/components/ntf/nft-single-card/nft-single-card.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NftComponent } from './modules/dashboard/pages/nft/nft.component';
import { NftChartCardComponent } from './modules/dashboard/components/ntf/nft-chart-card/nft-chart-card.component';
import { AdvertiesmentComponent } from './modules/dashboard/common/advertiesment/advertiesment.component';
import { AccountsComponent } from './modules/dashboard/common/accounts/accounts.component';
import { CategoryComponent } from './modules/dashboard/common/job/category/category.component';
import { JobComponent } from './modules/dashboard/common/job/job.component';
import { PositionComponent } from './modules/dashboard/common/job/position/position.component';
import { SigninComponent } from './modules/auth/pages/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './modules/auth/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './modules/auth/pages/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './modules/auth/pages/new-password/new-password.component';
import { TwoStepsComponent } from './modules/auth/pages/two-steps/two-steps.component';

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
    NftChartCardComponent,
    NftDualCardComponent,
    AppNftHeaderComponent,
    NftSingleCardComponent,
    NavbarMobileMenuComponent,
    NavbarMobileSubmenuComponent,
    ButtonComponent,
    ResponsiveHelperComponent,
    TableComponent,
    AdvertiesmentComponent,
    AccountsComponent,
    JobComponent,
    CategoryComponent,
    PositionComponent,
    SigninComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    TwoStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
