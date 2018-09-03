import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/tab1/level1/(ol1p1:pl1p1)', pathMatch: 'full' },
    { path: 'tab1', loadChildren: './tabs/tab1/tab1.module#Tab1Module' },
    { path: 'tab2', loadChildren: './tabs/tab2/tab2.module#Tab2Module' },
    { path: 'tab3', loadChildren: './tabs/tab3/tab3.module#Tab3Module' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
