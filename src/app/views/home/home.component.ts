import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Noticias } from 'src/app/models/noticias';
import { User } from 'src/app/models/user';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
constructor(private noticiaService: NoticiasService){}


listaNoticias = [] as Noticias[]



  ngOnInit(): void {
    this.carregarNoticias()
  }
  userModel = new User('');





  carregarNoticias() {
    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticias[]) =>{
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias)
    })
  }

  
  onSubmit() {
    console.log(this.userModel);
  }

}

