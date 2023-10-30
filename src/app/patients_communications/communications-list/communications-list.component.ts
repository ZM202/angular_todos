import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationsService} from "../../services/communications.service";
import{Communications} from "../../Models/communications.model";
import{Subscription} from "rxjs";
import{CommunicationsListService} from "../../services/communications_list.service";

@Component({
  selector: 'app-communications-list',
  templateUrl: './communications-list.component.html',
  styleUrls: ['./communications-list.component.css']
})
export class CommunicationsListComponent implements OnInit, OnDestroy{
  communications: Communications[] = [];
  private communicationsSub!: Subscription;

  editModeCommunication!: Communications;

  constructor(public communicationsService: CommunicationsService){}

  ngOnInit() {
    this.communications = this.communicationsService.getCommunications();
    this.communicationsSub = this.communicationsService.getUpdateListener()
      .subscribe((communications: Communications[]) => {
        this.communications = communications;
      })
  }

  ngOnDestroy() {
    this.communicationsSub.unsubscribe();
  }

  editCommunication(communication: Communications) {
    console.log('Edit button clicked', communication);
    this.editModeCommunication = communication;
  }

  saveCommunication(communication: Communications) {
    console.log('Save button clicked', communication);
    this.editModeCommunication = null!;
  }

  cancelEdit() {
    this.editModeCommunication = null!;
  }

  deleteCommunication(communication: Communications) {
    console.log('Delete button clicked', communication);
    const index = this.communications.indexOf(communication);
    if (index !== -1) {
      this.communications.splice(index, 1);
    }
  }
  protected readonly CommunicationsListService = CommunicationsListService;

}


