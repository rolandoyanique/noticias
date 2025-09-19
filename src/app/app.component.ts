import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  spinkit:boolean=false;
  listNoticias:any []=[];
  constructor(private _noticiaService:NoticiaService){}
  buscarNoticias(parametros:any){
    this.spinkit=true;
    this._noticiaService.getNoticias(parametros).subscribe(data=>{
      this.spinkit=false;
      this.listNoticias=data.sources;
    })
  }
}
