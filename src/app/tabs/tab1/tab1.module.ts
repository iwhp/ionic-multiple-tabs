import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page';
import { Tab1RoutingModule } from './tab1-routing.module';
import { Level1Page1PageModule } from '../../pages/level1/level1-page1/level1-page1.module';
import { Level1Page2PageModule } from '../../pages/level1/level1-page2/level1-page2.module';
import { Level1Page3PageModule } from '../../pages/level1/level1-page3/level1-page3.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tab1RoutingModule,
        Level1Page1PageModule,
        Level1Page2PageModule,
        Level1Page3PageModule
    ],
    declarations: [Tab1Page]
})
export class Tab1Module { }
