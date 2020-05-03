import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgForObject]'
})
export class NgForObjectDirective implements OnChanges {
  @Input() appNgForObjectFrom: { [key: string]: any };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appNgForObjectFrom && changes.appNgForObjectFrom.currentValue) {
      // remove all views
      this.viewContainerRef.clear();

      // create a new view for each property
      const propertyNames = Object.keys(changes.appNgForObjectFrom.currentValue);
      propertyNames.forEach((propertyName: string, index: number) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          // default value that will be used if an attribute is not assigned one
          $implicit: propertyName,
          index
        });
      });
    }
  }
}