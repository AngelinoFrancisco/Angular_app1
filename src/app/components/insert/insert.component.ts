import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from './../../Animals';
import { ListService } from './../../services/list.service';
import { Component, EventEmitter, Output } from '@angular/core'; 
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  animalForm!:FormGroup

  @Output() btnInsert = new EventEmitter()


  constructor(private list:ListService, private router:Router){}

  ngOnInit():void{
    this.animalForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })
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

  InserirAnimal(){
    if(this.animalForm.invalid){
      return;
    }   
    this.btnInsert.emit(this.animalForm.value)

  }


}
