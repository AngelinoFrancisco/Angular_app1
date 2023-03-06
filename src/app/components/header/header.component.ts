import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() candidateExport = new EventEmitter()
@Output() backHome= new EventEmitter()


newCandidate(){
  this.candidateExport.emit()
}

returnHome(){
  this.backHome.emit()

}


}


