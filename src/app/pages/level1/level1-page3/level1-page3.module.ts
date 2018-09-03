import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Level1Page3Page } from './level1-page3.page';

const routes: Routes = [
  {
    path: '',
    component: Level1Page3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Level1Page3Page]
})
export class Level1Page3PageModule {}
