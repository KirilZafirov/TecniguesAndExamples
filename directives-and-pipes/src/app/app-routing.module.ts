import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { BuiltInComponent } from './pipes/built-in/built-in.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { AttributeComponent } from './directives/attribute-directives/attribute.component';
import { ComponentDirectiveComponent } from './directives/component-directives/component-directive.component';
import { StructuralComponent } from './directives/structural-directives/structural.component';


const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent,
    children: [{
      path: 'build-in',
      component: BuiltInComponent,
    },
    {
      path: 'custom',
      component: CustomComponent,
    }
    ]
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    children: [{
      path: 'attribute',
      component: AttributeComponent
    },
    {
      path: 'structural',
      component: StructuralComponent,
    },
    {
      path: 'components',
      component: ComponentDirectiveComponent,
    }
    ]
  },
  {
    path:'',
    redirectTo:'/directives',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    PipesComponent,
    BuiltInComponent,
    DirectivesComponent,
    CustomComponent,
    AttributeComponent,
    ComponentDirectiveComponent,
    StructuralComponent
  ]
}  
