import { Injectable } from '@angular/core';

import { CANDIDATES } from "../models/mock-candidates";
import { Candidate } from "../models/candidate";

@Injectable()
export class VoteService {
  constructor() { }

  public promiseToGetCandidates(): Promise<Candidate[]> {
    return Promise.resolve(CANDIDATES);
  }

  public promiseToGetCandidate(number: number): Promise<Candidate> {
    return new Promise((resolve, reject) => {
      for(let cand of CANDIDATES) {
        if(cand.number == number) {
          resolve(cand);
          return;
        }
      }
      reject(null);
    });
  }

  public upVote(num: number) {
    for(let cand of CANDIDATES) {
      if(cand.number == num) {
        cand.upCount += 1;
      }
    }
  }
}
