import { Injectable } from '@angular/core';
import {Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
globalData;
  constructor() {
    this.globalData={title:'Mrs',firstName:'Rajani',lastName:'Wayal', currentDes:'Software Developer', profileHeading:'Software' +
        ' developer with 6+ years of experience designing and building responsive web design',summary:'<ul>\n' +
        '    <li>Having good knowledge with hand-coded HTML, CSS, JavaScript & jQuery, AJAX and Angular and AngularJS.</li>\n' +
        '    <li>Quite knowledge of server-side CSS pre-processing platforms, such as LESS.</li>\n' +
        '    <li>Basic Knowledge of Core Java, Groovy & Grails Basics, Play Scala, SQL/PLSQL Basics.</li>\n' +
        '    <li>Strong ability to learn existing applications quickly and able to make modifications.</li>\n' +
        '    <li>Successfully implemented individual module development for the web application.</li>\n' +
        '    <li>Experience working with both waterfall and agile development methodologies.</li>\n' +
        '    <li>Having good knowledge about client-side scripting languages. </li>\n' +
        '\n' +
        '  </ul>',
      professional:[
        {
        name: 'Sigma Systems Pvt Ltd', dsignation: 'SOFTWARE DEVELOPER', start: 'May 2016', end: 'present' +
          ' ', info:'<ul ><li >Develop individual modules according to requirement </li><li >Developed the Front End User Interface using HTML, JavaScript, Jquery</li><li >Identify ways to improve UI design and development</li><li >Build custom JavaScript MVC apps using similar framework</li><li >Manage task effectively and prioritize accordingly</li><li >Work effectively within collaborative team to identify and resolve issues</li><li >Engage in end to end system design and development processes</li><li >Ensure that application releases are packaged and deployed to the production</li><li >Environment- HTML, CSS, JavaScript, Bootstrap, jQuery, Java, Play/Scala</li></ul>'
      },
        {
          name: 'Yogi Softech Pvt Ltd', dsignation: 'SOFTWARE DEVELOPER', start: 'Nov 2013', end: 'April 2016',
          info: '    <p>IASMS (Institute and School Management System)</p>\n' +
            '             <ul>\n' +
            '                <li>Individual Module Development According to Requirement Analysis</li>\n' +
            '                <li>Developed the Front End User Interface using HTML, JavaScript, Angular </li>\n' +
            '                <li>Client interaction and problem solving</li>\n' +
            '                <li>Customizations according to client requirements</li>\n' +
            '                <li>Design Frames according to Bootstrap Template</li>\n' +
            '                <li>Manage task effectively and prioritize accordingly</li>\n' +
            '                <li>Work effectively within collaborative team to identify and resolve issues</li>\n' +
            '                <li>Environment- AngularJS, HTML, CSS, JavaScript, Bootstrap, jQuery, Java, Groovy/Grails</li>\n' +
            '    </ul>     <p>Manufacturing ERP </p>\n' +
            '         <ul>\n' +
            '                <li>Created user interface and navigation structure</li>\n' +
            '                <li>Implemented page designs in standard-complaint dynamic HTML and CSS</li>\n' +
            '                <li>Report development for project using Jasper Report</li>\n' +
            '                <li>Environment- AngularJS, HTML, CSS, JavaScript, Bootstrap, jQuery, Java, Groovy/Grails</li>\n' +
            '            </ul>  <p>Internship</p>\n' +
            '    <ul>\n' +
            '                <li>Develop Static/Dynamic Websites</li>\n' +
            '    </ul>'
        }
        ],
      education:[
        { university: 'Pune university', degree: 'BACHELOR OF ENGINEERING', spcl: 'BE-IT', year: '2013',grade:'First' +
            ' Class'},
        { university: 'Maharashtra', degree: 'Diploma', spcl: 'Diploma', year: '2010',grade:'First Class'},
        { university: 'Maharashtra', degree: 'SSC', spcl: 'SSC', year: '2007',grade:'Distinction'}
      ],
      skill:['HTML','CSS','JavaScript','Angular','Jquery','Bootstrap','Core Java'],
      dob: '08/08/1991',
      email: 'wayal.rajani@gmail.com',
      phone: '+91 9898776665',
      lang: ['English', 'Hindi', 'Marathi'],
      address: 'Pimple Guarav, Pune - 411069'



    };
  }
  public getGlobalData(){
    return this.globalData;
  }
  public setGlobalData(data){
    this.globalData.push(data);
  }


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
