import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  createData(data: any) {
    return this.http.post('http://localhost:8080/api/users', data)
  }
  getOtp(data: any) {
    return this.http.post(' http://localhost:8080/api/users/otp', data)
  }
  getData() {
    return this.http.get('http://localhost:8080/api/users')
  }
  getElection(elections: any) {
    return this.http.get('http://localhost:8080/api/election')

  }
  getPartyName() {
    return this.http.get('http://localhost:8080/api/party')
  }
  getPartySymbol() {
    return this.http.get('http://localhost:8080/api/party')
  }
  createNomination(id: any) {
    return this.http.post(' http://localhost:8080/api/nominations/insert', id)

  }
  getNominatedCandidates() {
    return this.http.get('http://localhost:8080/api/nominations/data')
  }
  getCandidates() {
    return this.http.get('http://localhost:8080/api/votings/published')
  }
  approveCandidate(candidateId: any) {
    const payload = { status: 1 }; // Assuming '1' represents the approved status
    return this.http.put(`http://localhost:8080/api/nominations/update/${candidateId}`, payload);
  }
  // updateData( id: any,data: any) {
  //   return this.http.put('http://localhost:3000/posts/' + `${id}`, data);
  // }
}
