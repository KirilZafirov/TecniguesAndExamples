import { ConfigService, ScreenType, IConfig } from './../../../config.service';
 

import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef, Inject, AfterViewInit, OnInit, OnDestroy } from '@angular/core'; 
import { combineLatest, Subject , Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { takeUntil, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective implements OnInit, AfterViewInit , OnDestroy { 

    private _viewPortWidth$: BehaviorSubject<number>;
    public viewPortWidth$ : Observable<number>;

    destroy$ = new Subject();
    type:ScreenType;
    constructor(
        private element: ElementRef,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        @Inject('windowObject') private windowRef: Window,
        private config: ConfigService
    ) { 
        this._viewPortWidth$ = new BehaviorSubject<number>(document.documentElement.clientWidth);
        this.viewPortWidth$ = this._viewPortWidth$.asObservable(); 
    }

    ngOnInit(): void {
        combineLatest(this.viewPortWidth$, this.config.config$ ).pipe(
            distinctUntilChanged(),
            takeUntil(this.destroy$)
        )
        .subscribe(([viewPortWidth , config]) => {
            this.setView(this.type, viewPortWidth, config);
        })
    }

    ngAfterViewInit() {
        fromEvent(this.windowRef , "resize").pipe(
            distinctUntilChanged(),
            takeUntil(this.destroy$),
            debounceTime(300)
            )
            .subscribe(() => this._viewPortWidth$.next(document.documentElement.clientWidth));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    setView(val, viewPortWidth, config) {
        this.viewContainer.clear();
        if (this.canView(val, viewPortWidth, config)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }

    @Input()
    set onlyForScreen(type) {
        this.type= type;
    }

    canView(screenType: ScreenType, viewPortWidth: number, config: IConfig) {

        if (screenType === ScreenType.MOBILE) {
            return viewPortWidth < config.mobile;
        }

        if (screenType === ScreenType.TABLET) {
            return config.mobile <= viewPortWidth &&
                viewPortWidth < config.tablet;
        }

        if (screenType === ScreenType.DESKTOP) {
            return config.tablet <= viewPortWidth;
        }
    }
}