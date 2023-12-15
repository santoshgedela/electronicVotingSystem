import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.scss']
})
export class NominationComponent implements OnInit {
  candidateForm!: FormGroup
  elections: any;
  parties: any;
  symbols: any;
  user: any;
  userDataString:any
  


  constructor(private fb: FormBuilder, private ser: UsersService, private route: Router, private router: ActivatedRoute) {
    this.candidateForm = this.fb.group({
      candidateName: ['', Validators.required],
      selectedElection: ['', Validators.required],
      selectedParty: ['', Validators.required],
      selectedSymbol: ['', Validators.required],
    });

    this.userDataString = sessionStorage.getItem('userData');
  }


  ngOnInit(): void {

    this.loadDropdownOptions();
    
   
    const userData = this.userDataString ? JSON.parse(this.userDataString) : {};
    const candidateName = userData.username || '';

    this.candidateForm.controls['candidateName'].patchValue(candidateName);
    // this.findUser();
  }

// findUser(): void {
//   this.ser.getData().subscribe((usersList: any) => {
//     const userId = sessionStorage.getItem('id');
//     this.user = usersList.find((user: any) => user.id?.toString() === userId);
//     this.candidateForm.controls['candidateName'].patchValue(this.user.username);
//   });
// }

  // onSubmit() {
  //   const userId = sessionStorage.getItem('id');
  
  //   const payload = {
  //     'election_id': this.candidateForm.value.selectedElection,
  //     'party_id': this.candidateForm.value.selectedParty,
  //     'candidate_id': userId,

  //   }
  //   this.ser.getNomination(payload).subscribe((x:any)=>{
  //     x;
      
      
  //   })
    
    
    
  // }

  // onSubmit() {
  //   // const userId = sessionStorage.getItem('userData');
  
  //   const payload = {
  //     'election_id': this.candidateForm.value.selectedElection,
  //     'party_id': this.candidateForm.value.selectedParty,
  //     'candidate_id':this.userDataString.id,
  //   };
  
  //   this.ser.getNomination(payload).subscribe(
  //     (response: any) => {
  //       console.log(response,"rep")
  //       if (response.congrats === "Nomination submitted successfully!") {
  //         Swal.fire({
  //           title: 'Good job!',
  //           text: response.congrats,
  //           icon: 'success'
  //         });
  //       } else {
  //         alert('Nomination submission failed. Please try again.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error submitting nomination:', error);
  //       alert('An error occurred while submitting nomination. Please try again.');
  //     }
  //   );
  // }
  // onSubmit() {
  //   const userData = this.userDataString ? JSON.parse(this.userDataString) : {};
    
  //   const payload = {
  //     'election_id': this.candidateForm.value.selectedElection,
  //     'party_id': this.candidateForm.value.selectedParty,
  //     'candidate_id': userData.id,
  //   };
  
  //   this.ser.createNomination(payload).subscribe(
  //     (response: any) => {
  //       console.log(response,"rep")
  //       if (response.congrats === "Nomination submitted successfully!") {
         
  //         Swal.fire({
  //           title: 'Good job!',
  //           text: response.congrats,
  //           icon: 'success'
  //         });
  //       } else {
  //         alert('Nomination submission failed. Please try again.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error submitting nomination:', error);
  //       alert('An error occurred while submitting nomination. Please try again.');
  //     }
  //   );
  // }
  // onSubmit() {
  //   const userData = this.userDataString ? JSON.parse(this.userDataString) : {};
  
  //   const payload = {
  //     'election_id': this.candidateForm.value.selectedElection,
  //     'party_id': this.candidateForm.value.selectedParty,
  //     'candidate_id': userData.id,
  //   };
  
  //   this.ser.createNomination(payload).subscribe(
  //     (response: any) => {
  //       console.log(response);  // Log the API response
  
  //       if (response.congrats === "Nomination submitted successfully!") {
  //         Swal.fire({
  //           title: 'Good job!',
  //           text: response.congrats,
  //           icon: 'success'
  //         });
  //       } else {
  //         alert('Nomination submission failed. Please try again.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error submitting nomination:', error);
  //       alert('An error occurred while submitting nomination. Please try again.');
  //     }
  //   );
  // }
  onSubmit() {
    const userData = this.userDataString ? JSON.parse(this.userDataString) : {};
    const payload = {
      'election_id': this.candidateForm.value.selectedElection,
      'party_id': this.candidateForm.value.selectedParty,
      'candidate_id': userData.id,
    };
  
    console.log('Nomination Payload:', payload);
  
    this.ser.createNomination(payload).subscribe(
      (response: any) => {
        console.log('Nomination Response:', response);
  
        if (response.congrats === "Nomination submitted successfully!") {
          Swal.fire({
            title: 'Good job!',
            text: response.congrats,
            icon: 'success'
          });
        } else {
          alert('Nomination submission failed. Please try again.');
        }
      },
      (error) => {
        console.error('Error submitting nomination:', error);
        alert('An error occurred while submitting nomination. Please try again.');
      }
    );
  }
  
  
  loadDropdownOptions() {
    this.ser.getElection('elections').subscribe((data: any) => {
      this.elections = data;

      (error: any) => {
        console.error('Error loading elections:', error);
      }

    });
    this.ser.getPartyName().subscribe((data: any) => {
      this.parties = data;


      (error: any) => {
        console.error('Error loading parties:', error);
      }

    });
    this.ser.getPartySymbol().subscribe((data: any) => {
      this.symbols = data;

      (error: any) => {
        console.error('Error loading symbols:', error);
      }

    })


  }

}
