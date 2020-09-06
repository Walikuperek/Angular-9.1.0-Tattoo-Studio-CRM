import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Observable string sources
  private __searchByTypeSource       = new Subject<string>();
  private __searchBySubTypeSource    = new Subject<string>();
  private __searchBySubSubTypeSource = new Subject<string>();

  getClickEventByType(): Observable<string> {
    return this.__searchByTypeSource.asObservable();
  }

  getClickEventBySubType(): Observable<string> {
    return this.__searchBySubTypeSource.asObservable();
  }

  getClickEventBySubSubType(): Observable<string> {
    return this.__searchBySubSubTypeSource.asObservable();
  }

  // Service methods
  searchByType(type: string) {
    console.log({ type });
    this.__searchByTypeSource.next(type);
  }

  searchBySubType(subtype: string) {
    console.log(this.__searchBySubTypeSource);
    this.__searchBySubTypeSource.next(subtype);
  }

  searchBySubSubType(subsubtype: string) {
    console.log({ subsubtype });
    this.__searchBySubSubTypeSource.next(subsubtype);
  }
}
