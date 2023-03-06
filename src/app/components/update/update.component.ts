import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from './../../Animals';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  animalForm!:FormGroup
  @Output() btnUpdateElement = new EventEmitter()
  @Input() Choosed!:Animal
  constructor(){
   
  }

  ngOnInit():void{
    this.animalForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })

    if(this.Choosed!=null || this.Choosed !=undefined){
     this.animalForm.get('name')!.setValue(this.Choosed.name)
     this.animalForm.get('age')!.setValue(this.Choosed.age)
     this.animalForm.get('type')!.setValue(this.Choosed.type)

    
    }
  }

  get name(){
    return this.animalForm.get('name')!
  }

  
  get age(){
    return this.animalForm.get('age')!
  }

  
  get type(){
    return this.animalForm.get('type')!
  }
  UpdateAnimal(){ 

    if(this.animalForm.invalid){
      return
    }

    this.btnUpdateElement.emit(this.animalForm.value)


  }

}
