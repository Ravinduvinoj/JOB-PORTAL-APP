import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { AdvertiesmentComponent } from './common/advertiesment/advertiesment.component';
import { CompanyComponent } from './common/accounts/company/company.component';
import { UserComponent } from './common/accounts/user/user.component';
import { CategoryComponent } from './common/job/category/category.component';
import { PositionComponent } from './common/job/position/position.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: NftComponent },
      { path: 'advertiesment', component: AdvertiesmentComponent },
      { path: 'accounts/company', component: CompanyComponent },
      { path: 'accounts/users', component: UserComponent },
      { path: 'job/category', component: CategoryComponent },
      { path: 'job/position', component: PositionComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
