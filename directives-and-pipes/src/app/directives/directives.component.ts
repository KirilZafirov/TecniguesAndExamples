import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {


  background: ThemePalette = undefined;

  links = [
    {
      name: 'Attribute',
      navigationLink: './attribute',
      index: 0
    },
    {
      name: 'Structural',
      navigationLink: './structural',
      index: 1
    },
    {
      name: 'Components',
      navigationLink: './components',
      index: 2
    }
  ];

  activeLink = this.links[0].index;



  attributeDirectivesColor = 'bg-warning';
  componentDirectivesColor = 'bg-danger';
  structuralDirectivesColor = 'bg-success';


  routerDirectives = [
    {
      label: 'RouterLink',
      url: 'https://angular.io/api/router/RouterLink',
      class:  this.attributeDirectivesColor
    },
    {
      label: 'RouteLinkActive',
      url: 'https://angular.io/api/router/RouterLinkActive',
      class:  this.attributeDirectivesColor
    },
    {
      label: 'RouterLinkWithHref',
      url: 'https://angular.io/api/router/RouterLinkWithHref',
      class:  this.attributeDirectivesColor
    },
    {
      label: 'RouterOutlet',
      url: 'https://angular.io/api/router/RouterOutlet',
      class:this.componentDirectivesColor
    }
  ]

  commonDirectives = [
    {
      label: 'NgClass',
      url: 'https://angular.io/api/common/NgClass',
      class:  this.attributeDirectivesColor
    },
    {
      label: 'NgComponentOutlet',
      url: 'https://angular.io/api/common/NgComponentOutlet',
      class:  this.componentDirectivesColor
    },
    {
      label: 'NgForOf',
      url: 'https://angular.io/api/common/NgForOf',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgIf',
      url: 'https://angular.io/api/common/NgIf',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgPlural',
      url: 'https://angular.io/api/common/NgPlural',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgPluralCase',
      url: 'https://angular.io/api/common/NgPluralCase',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgStyle',
      url: 'https://angular.io/api/common/NgStyle',
      class: this.attributeDirectivesColor
    },
    {
      label: 'NgSwitch',
      url: 'https://angular.io/api/common/NgSwitch',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgSwitchCase',
      url: 'https://angular.io/api/common/NgSwitchCase',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgSwitchDefault',
      url: 'https://angular.io/api/common/NgSwitchDefault',
      class: this.structuralDirectivesColor
    },
    {
      label: 'NgTemplateOutlet',
      url: 'https://angular.io/api/common/NgTemplateOutlet',
      class: this.componentDirectivesColor
    }, 
  ]


  
  formsDirectives = [
    {
      label: 'CheckboxControlValueAccessor',
      url: 'https://angular.io/api/forms/CheckboxControlValueAccessor'
    },
    {
      label: 'CheckboxRequiredValidator',
      url: 'https://angular.io/api/forms/CheckboxRequiredValidator'
    },
    {
      label: 'DefaultValueAccessor',
      url: 'https://angular.io/api/forms/DefaultValueAccessor'
    },
    {
      label: 'EmailValidator',
      url: 'https://angular.io/api/forms/EmailValidator'
    },
    {
      label: 'FormArrayName',
      url: 'https://angular.io/api/forms/FormArrayName'
    },
    {
      label: 'FormControlDirective',
      url: 'https://angular.io/api/forms/FormControlDirective'
    },
    {
      label: 'FormControlName',
      url: 'https://angular.io/api/forms/FormControlName'
    },
    {
      label: 'FormGroupDirective',
      url: 'https://angular.io/api/forms/FormGroupDirective'
    },
    {
      label: 'FormGroupName',
      url: 'https://angular.io/api/forms/FormGroupName'
    },
    {
      label: 'MaxLengthValidator',
      url: 'https://angular.io/api/forms/MaxLengthValidator'
    },
    {
      label: 'MinLengthValidator',
      url: 'https://angular.io/api/forms/MinLengthValidator'
    }, 
    {
      label: 'NgControlStatus',
      url: 'https://angular.io/api/forms/NgControlStatus'
    }, 
    {
      label: 'NgControlStatusGroup',
      url: 'https://angular.io/api/forms/NgControlStatusGroup'
    }, 
    {
      label: 'NgForm',
      url: 'https://angular.io/api/forms/NgForm'
    }, 
    {
      label: 'NgModel',
      url: 'https://angular.io/api/forms/NgModel'
    }, 
    {
      label: 'NgModelGroup',
      url: 'https://angular.io/api/forms/NgModelGroup'
    }, 
    {
      label: 'NgSelectOption',
      url: 'https://angular.io/api/forms/NgSelectOption'
    }, 
    {
      label: 'NumberValueAccessor',
      url: 'https://angular.io/api/forms/NumberValueAccessor'
    }, 
    {
      label: 'PatternValidator',
      url: 'https://angular.io/api/forms/PatternValidator'
    }, 
    {
      label: 'RadioControlValueAccessor',
      url: 'https://angular.io/api/forms/RadioControlValueAccessor'
    }, 
    {
      label: 'RangeValueAccessor',
      url: 'https://angular.io/api/forms/RangeValueAccessor'
    }, 
    {
      label: 'RequiredValidator',
      url: 'https://angular.io/api/forms/RequiredValidator'
    }, 
    {
      label: 'SelectControlValueAccessor',
      url: 'https://angular.io/api/forms/SelectControlValueAccessor'
    }, 
    {
      label: 'SelectMultipleControlValueAccessor',
      url: 'https://angular.io/api/forms/SelectMultipleControlValueAccessor'
    }, 
  ]
  ngOnInit(): void {
    this.background = 'accent';
  }

  setActive(index) {
    this.activeLink = index;
  }


  
  step;
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
