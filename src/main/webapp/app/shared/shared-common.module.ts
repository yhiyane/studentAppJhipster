import { NgModule } from '@angular/core';

import { StudentAppJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StudentAppJhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StudentAppJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StudentAppJhipsterSharedCommonModule {}
