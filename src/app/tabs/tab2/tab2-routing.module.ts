import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tab2Page } from './tab2.page';
import { Level2Page1Page } from '../../pages/level2/level2-page1/level2-page1.page';
import { Level2Page2Page } from '../../pages/level2/level2-page2/level2-page2.page';
import { Level2Page3Page } from '../../pages/level2/level2-page3/level2-page3.page';

const routes: Routes = [{
    path: 'level2', component: Tab2Page, children: [
        { outlet: 'ol2p1', path: 'pl2p1', component: Level2Page1Page },
        { outlet: 'ol2p2', path: 'pl2p2', component: Level2Page2Page },
        { outlet: 'ol2p3', path: 'pl2p3', component: Level2Page3Page }
    ]
},
{ path: '', redirectTo: '/tab2/level2/(ol2p1:pl2p1)' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Tab2RoutingModule {
}
