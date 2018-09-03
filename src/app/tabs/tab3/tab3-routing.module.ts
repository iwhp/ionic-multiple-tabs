import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tab3Page } from './tab3.page';
import { Level3Page1Page } from '../../pages/level3/level3-page1/level3-page1.page';
import { Level3Page2Page } from '../../pages/level3/level3-page2/level3-page2.page';
import { Level3Page3Page } from '../../pages/level3/level3-page3/level3-page3.page';

const routes: Routes = [{
    path: 'level3', component: Tab3Page, children: [
        { outlet: 'ol3p1', path: 'pl3p1', component: Level3Page1Page },
        { outlet: 'ol3p2', path: 'pl3p2', component: Level3Page2Page },
        { outlet: 'ol3p3', path: 'pl3p3', component: Level3Page3Page }
    ]
},
{ path: '', redirectTo: '/tab3/level3/(ol3p1:pl3p1)' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Tab3RoutingModule {
}
