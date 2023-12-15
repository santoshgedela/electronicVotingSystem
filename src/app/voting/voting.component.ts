import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  candidates: any;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getCandidates(); // Call the method to fetch candidates when the component is initialized
  }

  getCandidates() {
    this.service.getCandidates().subscribe((data: any) => {
      this.candidates = data;
      console.log(this.candidates);
    });
  }

  vote(candidate: any) {
    console.log(candidate);
    // Implement your voting logic here using the selected candidate information
  }
}
