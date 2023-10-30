import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CommunicationsService} from "../../services/communications.service";


@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent implements OnInit{
  constructor(public communicationsService: CommunicationsService) {
  }

  communicationAdded(communicationsForm: NgForm) {
    if (communicationsForm.invalid) {
      return
    }
    this.communicationsService.addCommunications(communicationsForm.value.dateTime, communicationsForm.value.health_topics, communicationsForm.value.recommendations);
    communicationsForm.resetForm();
  }

  ngOnInit(): void {
  }

}
