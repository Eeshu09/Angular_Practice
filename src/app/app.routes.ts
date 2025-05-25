import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductQueryComponent } from './pages/product-query/product-query.component';
import { FormvalidationComponent } from './pages/formvalidation/formvalidation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { CustompipeComponent } from './pages/custompipe/custompipe.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [
    
    {
        path:'user',component:UserListComponent
    },
    {path:'dataBinding',component:DatabindingComponent},
    {path:'addUser',component:AddUserComponent},
    {path:'directive',component:DirectiveComponent},
    {path:'product',component:ProductComponent,canActivate:[authGuard]},
    {
        path:'productDetails/:id',component:ProductDetailsComponent
    },
    {path:'product_query',component:ProductQueryComponent},
    {path:'formvalidaition',loadComponent:()=>import('../app/pages/formvalidation/formvalidation.component').then((c)=>c.FormvalidationComponent)
        
    },
    // {
    //     path:'formvalidaition',component:FormvalidationComponent
    // }
    {path:'pipe',component:PipeComponent},
 {path:'customPipe',component:CustompipeComponent},
 {path:'login',component:LoginComponent},

    {path:'**',component:PageNotFoundComponent,title:"NotFound"},
];
