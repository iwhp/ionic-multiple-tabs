import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Level3Page1Page } from './level3-page1.page';

const routes: Routes = [
  {
    path: '',
    component: Level3Page1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Level3Page1Page]
})
export class Level3Page1PageModule {}
