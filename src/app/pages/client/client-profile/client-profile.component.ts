import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  title = 'angular-bootstrap-modal';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent,
      {
        scrollable: true,
        keyboard: false,
        backdrop: 'static',
        centered: true,
        size: 'lg'
      });

    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }
    let MSG = 'MSG-006';

    modalRef.componentInstance.fromParent = data;
    modalRef.componentInstance.mensaje = MSG;
    modalRef.result.then((result) => {
      console.log(result);
      this.saveChanges();
    }, (reason) => {
      console.log('aqui en la razon');

    });
  }

  saveChanges(){
    console.log('Cambios salvados')
  }

}
