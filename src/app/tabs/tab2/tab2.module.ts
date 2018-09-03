import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';
import { Tab2RoutingModule } from './tab2-routing.module';
import { Level2Page1PageModule } from '../../pages/level2/level2-page1/level2-page1.module';
import { Level2Page2PageModule } from '../../pages/level2/level2-page2/level2-page2.module';
import { Level2Page3PageModule } from '../../pages/level2/level2-page3/level2-page3.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tab2RoutingModule,
        Level2Page1PageModule,
        Level2Page2PageModule,
        Level2Page3PageModule
    ],
    declarations: [Tab2Page]
})
export class Tab2Module { }
