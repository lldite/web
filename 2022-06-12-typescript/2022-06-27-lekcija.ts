import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobezsargsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  //parbaudam vai ir atlauts  
      return true;
  
    }
  
}

<li *ngFor="let cipars of cipari"> cipars {{cipars}}</li>

An
Antons Kolodinskis
8:03 PM
parisCipari = [] as number[];

An
Antons Kolodinskis
8:03 PM
for(let i=0;i<11;i+=2){
this.parisCipari.push(i)}

An
Antons Kolodinskis
8:04 PM
<p *ngFor="let parC of parisCipari">{{parC}}</p>