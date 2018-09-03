import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Level2Page3Page } from './level2-page3.page';

const routes: Routes = [
  {
    path: '',
    component: Level2Page3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Level2Page3Page]
})
export class Level2Page3PageModule {}
