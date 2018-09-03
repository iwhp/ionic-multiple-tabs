import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab3Page } from './tab3.page';
import { Tab3RoutingModule } from './tab3-routing.module';
import { Level3Page1PageModule } from '../../pages/level3/level3-page1/level3-page1.module';
import { Level3Page2PageModule } from '../../pages/level3/level3-page2/level3-page2.module';
import { Level3Page3PageModule } from '../../pages/level3/level3-page3/level3-page3.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tab3RoutingModule,
        Level3Page1PageModule,
        Level3Page2PageModule,
        Level3Page3PageModule
    ],
    declarations: [Tab3Page]
})
export class Tab3Module { }
