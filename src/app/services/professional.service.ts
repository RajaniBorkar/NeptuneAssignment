import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }
  public getProfessionalData() {
    return [
      {
        name: 'Sigma Systems Pvt Ltd', dsignation: 'SOFTWARE DEVELOPER', start: 'May 2016', end: 'present' +
          ' 2016', info: [
          {
            project: 'Inventory Management',
            responsibility: [
              {rs: 'Design web applications according to client briefs and modify designs to meet changes in client specifications'},
              {rs: 'Creating modular, responsive template using bootstrap and css.'},
              {rs: 'Identify ways to improve UI design and development'},
              {rs: 'Supervise junior developers, provide training and motivate team members'},
              {rs: 'Work effectively within collaborative team to identify and resolve issues'},
              {rs: 'Working on Junit part, Familiarity with build-tools such as Maven'},
              {rs: 'Manage task effectively and prioritize accordingly'},
              {rs: 'Environment- Angular, HTML, CSS, JavaScript, Bootstrap, Java'}
            ]
          },
          {
            project: 'Order Management',
            responsibility: [
              {rs: 'Develop individual modules according to requirement '},
              {rs: 'Developed the Front End User Interface using HTML, JavaScript, Jquery'},
              {rs: 'Identify ways to improve UI design and development'},
              {rs: 'Build custom JavaScript MVC apps using similar framework'},
              {rs: 'Manage task effectively and prioritize accordingly'},
              {rs: 'Work effectively within collaborative team to identify and resolve issues'},
              {rs: 'Engage in end to end system design and development processes'},
              {rs: 'Ensure that application releases are packaged and deployed to the production'},
              {rs: 'Environment- HTML, CSS, JavaScript, Bootstrap, jQuery, Java, Play/Scala'}
            ]
          }


        ]
      },

      {
        name: 'Yogi Softech Pvt Ltd', dsignation: 'SOFTWARE DEVELOPER', start: 'Nov 2013', end: 'April 2016',
        info: [
          {
            project: 'IASMS (Institute and School Management System) ',
            responsibility: [
              {rs: 'Individual Module Development According to Requirement Analysis'},
              {rs: 'Developed the Front End User Interface using HTML, JavaScript, Angular '},
              {rs: 'Client interaction and problem solving'},
              {rs: 'Customizations according to client requirements'},
              {rs: 'Design Frames according to Bootstrap Template'},
              {rs: 'Manage task effectively and prioritize accordingly'},
              {rs: 'Work effectively within collaborative team to identify and resolve issues'},
              {rs: 'Environment- AngularJS, HTML, CSS, JavaScript, Bootstrap, jQuery, Java, Groovy/Grails'}
            ]
          },
          {
            project: 'Manufacturing ERP ',
            responsibility: [
              {rs: 'Created user interface and navigation structure'},
              {rs: 'Implemented page designs in standard-complaint dynamic HTML and CSS'},
              {rs: 'Report development for project using Jasper Report'},
              {rs: 'Environment- AngularJS, HTML, CSS, JavaScript, Bootstrap, jQuery, Java, Groovy/Grails'}
            ]
          },
          {
            project: 'Internship ',
            responsibility: [
              {rs: 'Develop Static/Dynamic Websites'}
            ]
          }


        ]
      }


    ];
  }
}
