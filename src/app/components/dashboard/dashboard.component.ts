import { Router } from '@angular/router';
import { ListService } from './../../services/list.service';
import { Animal } from './../../Animals';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
  insert!:boolean
  update!:boolean 

  animals!:Array<Animal> 
  choosedId!:number 
  animalUpdate!:Animal
  control!:boolean

  // animals: Array<Animal> = new Array();

  constructor(private list: ListService, private router:Router) {
    
    list.getAll().subscribe(result=>{
      this.animals=result
      
    }) 
  }

  onCandidate(){
    this.insert= true
    this.update= false
  }
  onBackHome(){
    this.insert= false
    this.update=false
  }


  onChooseElement(choosed: Animal) { 
    this.choosedId = choosed.id!
    this.animalUpdate=choosed

  }
  onUpdateEvent(){ 
    this.insert=false
    this.update=true
  }

  onUpdateElement(animal:Animal){

    animal.id = this.choosedId
    this.list.update(animal).subscribe(()=>{ 
      this.list.getAll().subscribe(result=>{
        this.animals= result
        this.insert= false
        this.update=false
      } )
  
    })
  }

onInsertElement(animal:Animal){
  this.list.create(animal).subscribe(()=>{
    this.list.getAll().subscribe(result=>{
      this.animals= result
      this.insert= false
      this.update=false
    })
  })

}

  
  onDeleteElement(id:number){ 
    this.list.delete(id).subscribe(()=>{
      this.list.getAll().subscribe(result=>{
        this.animals= result
        this.insert= false
        this.update=false
        this.control= false
      })
      
    }, (err)=>{
      window.alert("id já não existe") 
    })

  }
  


}
