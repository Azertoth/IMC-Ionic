import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taille = 0;
  poids = 0;
  imc = '';
  message = '';
  message2 ='';

  constructor() {}
  
  onCalc(){
    let calc = this.poids/(this.taille*this.taille);
    this.imc = (calc).toFixed(1);

 
    if (calc< 18.5){
      this.message ="maigreur"
      let poidsIdeal = 18.5*(this.taille*this.taille);
      poidsIdeal = poidsIdeal-this.poids;
      let p =poidsIdeal.toFixed(1);
      this.message2 = 'Vous devriez prendre ' + p +' kg pour être en IMC normal'
    } else if (calc>= 18.5 && calc<25){
      this.message = 'normal'
    } else if (calc>= 25) {
      this.message = "surpoids"  
      let poidsIdeal = 25*(this.taille*this.taille);
      poidsIdeal = this.poids-poidsIdeal;
      let p =poidsIdeal.toFixed(1);
      this.message2 = 'Vous devriez perdre ' + p +' kg pour être en IMC normal'
    }
      
  }

}
