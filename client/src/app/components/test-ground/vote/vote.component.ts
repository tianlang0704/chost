import { Component, OnInit } from '@angular/core';
import {VoteService} from "../../../services/vote.service";
import {Candidate} from "../../../models/candidate";

@Component({
  selector: 'app-vote',
  templateUrl: 'vote.component.html',
  styleUrls: ['vote.component.css']
})
export class VoteComponent implements OnInit {

  candidates: Candidate[];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates(): void {
    this.voteService.promiseToGetCandidates()
      .then((candidates) => {
        this.candidates = candidates;
      });
  }

  upVote(num: number) {
    this.voteService.upVote(num);
  }
}
