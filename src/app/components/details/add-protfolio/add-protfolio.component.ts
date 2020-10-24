import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {AsyncSubject, Observable, Subject} from "rxjs";
import {ProfessionalService} from "../../../services/professional.service";
import {Select2OptionData} from "ng-select2";
import {SkillService} from "../../../services/skill.service";
import { Options } from 'select2';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-protfolio',
  templateUrl: './add-protfolio.component.html',
  styleUrls: ['./add-protfolio.component.css']
})
export class AddProtfolioComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public langData: Array<Select2OptionData>;
  public options: Options;
  registerForm: FormGroup;
  submitted = false;
  table_toolbar_val=  'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol';
  toolbar_val=  'undo redo | styleselect | bullist numlist| bold italic underline Strikethrough | forecolor backcolor | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify |superscript subscript | outdent indent';
  formValid=false;
  tinymce: any;
  @ViewChild('inputFile') myInputVariable: ElementRef;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,private professionalService: ProfessionalService,private skillService:SkillService,private router:Router) { }

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'HTML',
        text: 'HTML'
      },
      {
        id: 'CSS',
        text: 'CSS'
      },
      {
        id: 'Angular',
        text: 'Angular'
      }
    ];

 this.langData = [
      {
        id: 'English',
        text: 'English'
      },
      {
        id: 'Hindi',
        text: 'Hindi'
      },
      {
        id: 'Marathi',
        text: 'Marathi'
      }
    ];

    this.options = {
      multiple: true,
      theme: 'classic',
      tags: true,
      width: '100%'


    };

    this.registerForm = this.fb.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
        skill: [''],
        lang: [''],
        address: [''],
        img: [null],
        currentDes: ['', Validators.required],
        profileHeading: ['', Validators.required],
        summary: [''],
        professional: this.fb.array([], []),
        education: this.fb.array([], [])
      }
    );
  }

 get professional() {
    return this.registerForm.get('professional') as FormArray;
  }
  get educationArray() {
    return this.registerForm.get('education') as FormArray;
  }
  get educationArrayControl() {
    return (this.registerForm.get('education') as FormArray).controls
  }
  get professionalArray() {
    return (this.registerForm.get('professional') as FormArray).controls
  }
  addProfessional() {
    this.professional.push(this.initCourse());
  }
  removeProfessional(index) {
    this.professional.removeAt(index);
  }

  addEducation() {
    this.educationArray.push(this.initEducation());
  }
  removeEducation(index) {
    this.educationArray.removeAt(index);
  }


   addInfo(index) {
     this.infoControl(index).push(this.initInfo());
  }


  initCourse() {
    return this.fb.group({
      name: ['', Validators.required],
      dsignation: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      info:['']
    });
  }
 initEducation() {
    return this.fb.group({
      university: [''],
      degree: [''],
      spcl: [''],
      year: [''],
      grade:['']
    });
  }

 initInfo() {
    return this.fb.group({
      project: [''],
      responsibility: ['']
    });
  }

  get f() { return this.registerForm.controls; }
  get p() { return (this.registerForm.get('password_group') as FormGroup).controls }
  get professionalControl() { return (this.registerForm.get('professional') as FormArray).controls }
  professionalControlIndex(ind) { return (this.professionalControl[ind] as FormGroup).controls }
  infoControlIndex(parent,childin) { return (this.infoControl(parent)[childin] as FormGroup).controls }
  infoControl(index) { return (this.professionalControl[index].get('info') as FormArray).controls }
  infoArray(index) { return (this.professionalControl[index] as FormGroup).controls }

  onSubmit() {
    if(this.registerForm.invalid) {
      this.formValid=false;
    }
    this.formValid=true;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if(localStorage.getItem(this.registerForm.controls.firstName.value)==null){
      localStorage.setItem(this.registerForm.controls.firstName.value, JSON.stringify(this.registerForm.value));
    }
    localStorage.setItem('selectedKey', this.registerForm.controls.firstName.value);
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigate(['/summary'])
      .then(() => {
        window.location.reload();
      });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  editData(){
  debugger;
    if(localStorage.getItem('selectedKey')==null){
      localStorage.setItem('selectedKey', 'Rajani');
    }
    this.registerForm.patchValue(
      JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey')))
    );
    this.patchProfessional();

  }
  patchProfessional() {
    let data=JSON.parse(localStorage.getItem(localStorage.getItem('selectedKey'))).professional;
    let i=0
    data.forEach(x=>{
      this.professionalArray.push(this.fb.group({
        id: x.id,
        name: x.name,
        dsignation: x.dsignation,
        start:x.start,
        end:x.end,
        info:this.patchInfo(x.info)

      }));
      i++
    });
  }

  patchInfo( data) {
   let  info=new FormArray([]).controls;
    if (data != undefined) {
      data.forEach(x => {
        info.push(this.fb.group({
          project: x.project,
          responsibility: x.responsibility

        }));
      });
    }
return info;
  }
  onFileChange(event) {
    debugger;
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      if(file.size > 2097152){
        this.myInputVariable.nativeElement.value = '';
        alert("File is too big!!!! It should be less than 2 mb");
      }else {
        reader.onload = () => {
          this.registerForm.controls['img'].setValue(reader.result);
        };
      }

    }
  }


//   handleFileSelect(evt) {
//     var files = evt.target.files; // FileList object
//
//     // Loop through the FileList and render image files as thumbnails.
//     for (var i = 0, f; f = files[i]; i++) {
//
//       // Only process image files.
//       if (!f.type.match('image.*')) {
//         continue;
//       }
//
//       var reader = new FileReader();
//
//       // Closure to capture the file information.
//       reader.onload = (function(theFile) {
//         return function(e) {
//           // Render thumbnail.
//           var span = document.createElement('span');
//           span.innerHTML = ['<img class="thumb" src="', e.target.result,
//             '" title="', escape(theFile.name), '"/>'].join('');
//
//           document.getElementById('list').insertBefore(span, null);
//           localStorage.setItem('img', e.target.result);
//         };
//       })(f);
//
//       // Read in the image file as a data URL.
//       reader.readAsDataURL(f);
//     }
//   }
//
//   document.getElementById('files').addEventListener('change', handleFileSelect, false);
//
//
//   if(localStorage.img) {
//
//   var span = document.createElement('span');
//   span.innerHTML += ['<img class="thumb" src="', localStorage.img,
//   '" title="test"/>'].join('');
//
//   document.getElementById('list').insertBefore(span, null);
//
// }


}
