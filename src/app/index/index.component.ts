import { Component } from '@angular/core';
// for reactive forms
import { FormControl, FormGroup, } from '@angular/forms';
// for validations
import{Validators} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
// ////////////////////////////reactive forms////////////////////////////////
show=false;
printData(data:any){

  // OK DATA 
  // console.log(data);
}

getDataFunc(){
  console.log(this.stdDataForm.value); 
  // whole form in data
    this.show=true;
    // var data = this.stdDataForm.value;
    // this.printData(data);
}

// must match form group name in html 
// validation
get name(){
  return this.stdDataForm.get('name');
}
get email(){
  return this.stdDataForm.get('email');
}
// reactive form 
stdDataForm = new FormGroup({
  name : new FormControl("" , [Validators.required]),
  email : new FormControl("" , [Validators.required]),
  program : new FormControl("" , [Validators.required]),
  gender : new FormControl("" , [Validators.required]),
  profilePic : new FormControl("" , [Validators.required]),
  course : new FormControl("" , [Validators.required]),
})

/////////////////////////dependant dropdowns////////////////////////////////
// list:any[] = [];

showSecondList(items : any []){
this.listDependant = items;
}
getData(data : any){
  console.log(data);
  
};
addOpt(item: any){
this.list1.map(li => li.name === item ? this.showSecondList(li.course):console.log("joj"));
  
}

list : any[] = ['BSCS' , 'BBA' , 'BSIT'];
listDependant : any[] = []; 
list1 : any[] = [
  {
  id : 1,
  name : 'BSCS',
  course : ['PF' , 'CC' , 'WEB']
},
  {
  id : 2,
  name : 'BSIT',
  course : ['Routing' , 'CC' , 'NET']
},
  {
  id : 1,
  name : 'BBA',
  course : ['BA' , 'ACC' , 'MATH']
},
];
}

