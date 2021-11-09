import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../carros.service';
import { CarroModel } from './carro.model';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
carro:CarroModel =  new CarroModel();
  carros:Array<any>=new Array();
  constructor(private carrosService:CarrosService) { }

  ngOnInit() {
    this.listarCarros();
  }
  
  atualizar(id:number){
    
    this.carrosService. atualizarCarros(id,this.carro).subscribe(carros =>{
  this.carro=new CarroModel();
  this.listarCarros();
    },
      err =>{
        console.log('Erro ao atualizar',err)
    })
    
    }
    

  cadastrar(){
  console.log(this.carro); 
  this.carrosService. cadastrarCarro(this.carro).subscribe(carros =>{
this.carro=new CarroModel();
this.listarCarros();
  },
    err =>{
      console.log('Erro ao cadastrar',err)
  })
  
  }
  remover(id:number){
    
    this.carrosService. removerCarro(id).subscribe(carros =>{
  this.carro=new CarroModel();
  this.listarCarros();
    },
      err =>{
        console.log('Erro ao remover',err)
    })
    
    }
    
listarCarros(){
this.carrosService.listarCarros().subscribe(carros =>{
this.carros=carros;
},err=>{
  console.log('Erro ao listas carros',err)
})
}
}
