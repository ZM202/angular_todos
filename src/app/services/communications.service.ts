import{Communications} from "../Models/communications.model";
import{Injectable} from "@angular/core";
import{Subject} from "rxjs";

@Injectable({providedIn: 'root'})

export class CommunicationsService {
  private communication: Communications[] = [];
  private communicationUpdated = new Subject<Communications[]>();

  getUpdateListener() {
    return this.communicationUpdated.asObservable();
  }

  addCommunications(dateTime: any, health_topics: string, recommendations: string) {
    const communications: Communications = {
      dateTime: new Date(),
      health_topics: health_topics,
      recommendations: recommendations
    };
    this.communication.push(communications);
    this.communicationUpdated.next([...this.communication])
  }

  getCommunications(): Communications[] {
    return [...this.communication];
  }
}
