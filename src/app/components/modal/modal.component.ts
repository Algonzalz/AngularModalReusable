import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() fromParent;
  @Input() mensaje;

  mensajito
  constructor(
    public activeModal: NgbActiveModal
    ) { }
    
    ngOnInit() {
      this.mensajito = this.mensaje;
    console.log(this.fromParent);
    console.log(this.mensajito);
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
