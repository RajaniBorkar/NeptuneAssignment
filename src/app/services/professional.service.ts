import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }
  public getProfessionalData() {
    return [
      { name: 'INTELITEC SOLUTIONS', dsignation: 'SENIOR WEB DEVELOPER', start: 'March 2013',end:'present',info:'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.' },
      { name: 'INTELITEC SOLUTIONS', dsignation: 'WEB DEVELOPER', start: 'December 2011',end:'March 2013',info:'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.' },
      { name: 'SHOUT! MEDIA PRODUCTIONS', dsignation: 'JUNIOR WEB DEVELOPER', start: 'July 2010',end:'December 2011',info:'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.' },
    ];
  }
}
