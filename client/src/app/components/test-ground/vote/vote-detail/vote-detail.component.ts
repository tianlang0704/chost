import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { VoteService } from "../../../../services/vote.service";
import { Candidate } from "../../../../models/candidate";


@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.css']
})
export class VoteDetailComponent implements OnInit {
  public candidate: Candidate = null;

  constructor(
    private voteService: VoteService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe((params) => {
      this.voteService.promiseToGetCandidate(params["number"])
        .then(cand => this.candidate = cand);
    });
  }

  ngOnInit() {
    document.body.scrollTop = 0;
  }

  upVote(num: number) {
    this.voteService.upVote(num);
  }

  goBack() {
    this.location.back();
  }

}
