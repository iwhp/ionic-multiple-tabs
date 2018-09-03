import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Level3Page3Page } from './level3-page3.page';

const routes: Routes = [
  {
    path: '',
    component: Level3Page3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Level3Page3Page]
})
export class Level3Page3PageModule {}
