import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
//   candidates: any[] = [];

//   constructor(private userService: UsersService) { }

//   ngOnInit(): void {
//     this.getNominatedCandidates();
//     this.getUsers();
//     this.getElections();
//     this.getParty();
//   }
// getUsers(){
//   this.userService.getData().subscribe((x:any)=>{
//     x;

//   })
// }
// getElections(){
//   this.userService.getElection('elections').subscribe((t:any)=>{
//     t;
//   })
// }
// getParty(){
//   this.userService.getPartyName().subscribe((z:any)=>{
//     z;

//   })
// }

//   getNominatedCandidates(): void {
//     this.userService.getNominatedCandidates().subscribe(
//       (data: any) => {
//         this.candidates = data;
//       },
//       (error) => {
//         console.error('Error fetching nominated candidates:', error);
//       }
//     );
//   }

//   approveCandidate(candidateId: number): void {
//     this.userService.approveCandidate(candidateId).subscribe(
//       (response: any) => {
       
//         const candidateIndex = this.candidates.findIndex(c => c.id === candidateId);
//         if (candidateIndex !== -1) {
//           this.candidates[candidateIndex].approvalStatus = 1;
//         }
//       },
//       (error) => {
//         console.error('Error approving candidate:', error);
//       }
//     );
//   }


candidates: any[] = [];

constructor(private userService: UsersService) { }

ngOnInit(): void {
  this.getNominatedCandidates();
}

getNominatedCandidates(): void {
  this.userService.getNominatedCandidates().subscribe(
    (data: any) => {
      this.candidates = data.map((candidate:any) => ({
        id: candidate.id,
        candidateName: candidate.candidateName,
        electionName: candidate.election_name,
        partyName: candidate.party_name,
        partySymbol: candidate.party_symbol,
        status: candidate.status,
      }));
    },
    (error) => {
      console.error('Error fetching nominated candidates:', error);
    }
  );
}

approveCandidate(candidateId: number): void {
  this.userService.approveCandidate(candidateId).subscribe(
    (response: any) => {
      const candidateIndex = this.candidates.findIndex(c => c.id === candidateId);
      if (candidateIndex !== -1) {
        this.candidates[candidateIndex].status = 1;
        Swal.fire({
          title: 'Success!',
          text: 'Candidate approved successfully!',
          icon: 'success',
        });
      }
    },
    (error) => {
      console.error('Error approving candidate:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to approve candidate. Please try again.',
        icon: 'error',
      });
    }
  );
}
}
