import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductQueryComponent } from './pages/product-query/product-query.component';

export const routes: Routes = [
    {
        path:'user',component:UserListComponent
    },
    {path:'dataBinding',component:DatabindingComponent},
    {path:'addUser',component:AddUserComponent},
    {path:'directive',component:DirectiveComponent},
    {path:'product',component:ProductComponent},
    {
        path:'productDetails/:id',component:ProductDetailsComponent
    },
    {path:'product_query',component:ProductQueryComponent}
];
