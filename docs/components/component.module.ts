//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssPaginationModule } from './pagination/pagination.module';
import { CssSelectModule } from './select/select.module';
import { CssImagesModule } from './images/images.module';
import { CssToastrModule } from './toastr/toastr.module';
import { CssModalModule } from './modal/modal.module';
import { CssInputModule } from './input/input.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssPaginationModule,
        CssSelectModule,
        CssImagesModule,
        CssToastrModule,
        CssModalModule,
        CssInputModule
    ]
})
export class ComponentModule { }