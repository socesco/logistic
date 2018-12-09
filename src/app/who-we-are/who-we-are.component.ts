import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  sezione: string = "who-we-are";
  listOfClients: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.listOfClients = [
      {"name":"Esselunga", "img": "../../assets/img/whoWeAre/esselunga.png"}, 	   
      {"name":"Carrefour", "img": "../../assets/img/whoWeAre/carrefour.png"}, 	   
      {"name":"Sephora","img": "../../assets/img/whoWeAre/sephora.png"}, 	
      {"name":"Spar","img": "../../assets/img/whoWeAre/spar.png"},    	
      {"name":"Pam","img": "../../assets/img/whoWeAre/pam.png"}, 		
      {"name":"Billa","img": "../../assets/img/whoWeAre/billa.png"},		
      {"name":"Ld","img": "../../assets/img/whoWeAre/ld.png"}, 		
      {"name":"Agora","img": "../../assets/img/whoWeAre/agora-2.png"}, 	
      {"name":"Alliance","img": "../../assets/img/whoWeAre/alliance.png"}, 	
      {"name":"Brendolan","img": "../../assets/img/whoWeAre/brendolan.png"}, 	
      {"name":"Unilever","img": "../../assets/img/whoWeAre/unilever.png"}, 	
      {"name":"Eurospin","img": "../../assets/img/whoWeAre/eurospin.png"}, 	
      {"name":"San Carlo","img": "../../assets/img/whoWeAre/sancarlo.png"}, 	
      {"name":"San gemini","img": "../../assets/img/whoWeAre/sangemini.png"}, 	
      {"name":"Famila","img": "../../assets/img/whoWeAre/famila.png"}, 	
      {"name":"Trenitalia","img": "../../assets/img/whoWeAre/trenitalia.png"}
    ]
  }

}
