import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarroModel } from './carros/carro.model';
@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http:HttpClient) { }

  cadastrarCarro(carro:CarroModel) :Observable<any>{
    return this.http.post("http://localhost:3000/carros/",carro);  
  }
  listarCarros():Observable<any>{
  return this.http.get("http://localhost:3000/carros/");
}
atualizarCarros(id:any,carro:CarroModel):Observable<any>{
  return this.http.put("http://localhost:3000/carros/".concat(id),carro);
}
removerCarro(id:any){
  return this.http.delete("http://localhost:3000/carros/".concat(id));

}
}