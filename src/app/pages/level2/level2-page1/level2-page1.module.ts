import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Level2Page1Page } from './level2-page1.page';

const routes: Routes = [
  {
    path: '',
    component: Level2Page1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Level2Page1Page]
})
export class Level2Page1PageModule {}
