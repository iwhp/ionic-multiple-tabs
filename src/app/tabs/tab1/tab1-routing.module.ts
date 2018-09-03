import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tab1Page } from './tab1.page';
import { Level1Page1Page } from '../../pages/level1/level1-page1/level1-page1.page';
import { Level1Page2Page } from '../../pages/level1/level1-page2/level1-page2.page';
import { Level1Page3Page } from '../../pages/level1/level1-page3/level1-page3.page';

const routes: Routes = [{
    path: 'level1', component: Tab1Page, children: [
        { outlet: 'ol1p1', path: 'pl1p1', component: Level1Page1Page },
        { outlet: 'ol1p2', path: 'pl1p2', component: Level1Page2Page },
        { outlet: 'ol1p3', path: 'pl1p3', component: Level1Page3Page }
    ]
},
{ path: '', redirectTo: '/tab1/level1/(ol1p1:pl1p1)' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Tab1RoutingModule {
}
