import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private _config$: BehaviorSubject<IConfig>;
  public config$ : Observable<IConfig>;

  constructor() {
    this._config$ = new BehaviorSubject<IConfig>(this.config);
    this.config$ = this._config$.asObservable(); 
   }
 
 

  setConfig(config: IConfig) {
    this._config$.next(config);
  }

  
  config : IConfig= {
    mobile: 600 , 
    tablet: 900
  };
  
}


export interface IConfig {
  mobile: number;
  tablet: number;
}

export const DEFAULT_CONFIG : IConfig = {
  mobile: 600 , 
  tablet: 900
}
export const enum ScreenType {
  DESKTOP = 'desktop' , 
  TABLET = 'tablet' , 
  MOBILE = 'mobile' 
}