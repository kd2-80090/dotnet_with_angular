import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from '../models/property';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  constructor(private http: HttpClient){}

  // GetAllProperties(): Observable<Property[]>{
  //   return this.http.get<any[]>('data/properties.json')

  GetAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get<{ [key: string]: IProperty }>('data/properties.json').pipe(
      map(data => {
        const propertiesArray : Array<IProperty> = [];

        for(const id in data){
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }
}
