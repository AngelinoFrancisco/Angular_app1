import { Animal } from './../../Animals';
import { ListService } from './../../services/list.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  choosedId!: number

  @Output() chooseElement: EventEmitter<Animal> = new EventEmitter()
  @Output() btnExcluir = new EventEmitter()
  @Output() btnUpdateEvent = new EventEmitter()

  @Input() users!: Array<Animal>
  @Input() choosedName!: string
  @Input() choosedElement!: boolean
  constructor(private list: ListService) { }

  onClick(clicked: Animal) {
    this.choosedElement = true
    this.choosedName = clicked.name
    this.choosedId = clicked.id!
    this.chooseElement.emit(clicked)

  }
  updateEvent() {
    this.btnUpdateEvent.emit()
  }

  deleteElement() {
    this.btnExcluir.emit(this.choosedId)
  }



}
