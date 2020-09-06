import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/cartridges';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  findByName(name: string) {
    return this.http.get(`${baseUrl}/search/${name}`);
  }

  findByType(type: string) {
    return this.http.get(`${baseUrl}/type/${type}`);
  }

  findBySubType(subtype: string) {
    return this.http.get(`${baseUrl}/subtype/${subtype}`);
  }

  findBySubSubType(subsubtype: string) {
    return this.http.get(`${baseUrl}/subsubtype/${subsubtype}`);
  }
}
