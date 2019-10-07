import {Component, OnInit} from '@angular/core';
import {Wimlt} from "../wimlt";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-wimlt',
  templateUrl: './wimlt.component.html',
  styleUrls: ['./wimlt.component.scss']
})
export class WimltComponent implements OnInit {

  wimlts;
  index = 0;
  isAppended = false; // it makes sure end text is displayed only once

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe((data: Array<Wimlt>) =>
      this.wimlts = data);
  }

  getData(): Observable<Wimlt[]> {
    return this.http.get<Wimlt[]>('http://localhost:9000/wimlt');
  }

  Next(){
    this.index ++;
    if(this.index == this.wimlts.length && !this.isAppended) {
      //This is the end message
      this.wimlts.push(new Wimlt(0,"Click one more time to start new game"));
      this.isAppended = true;
    }
    if(this.index >= this.wimlts.length) {
      this.index = 0;
      this.isAppended = false;
      this.ngOnInit()
    }
  }
}
