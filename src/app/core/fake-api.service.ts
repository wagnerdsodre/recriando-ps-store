import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
 fake_URL:string = environment.fake_api_url
 private http = inject(HttpClient)


 loadGames():Observable<any>{
   return this.http.get(this.fake_URL, { observe: 'response' });
 }


}
