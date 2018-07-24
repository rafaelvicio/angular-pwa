import { Component, OnInit } from '@angular/core';


import { PessoaService } from '../pessoa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})
export class ListPessoaComponent implements OnInit {

  constructor(private service: PessoaService) { }

  pessoas: any[];

  ngOnInit() {
    this.service.listPessoas().subscribe(data => {
      this.pessoas = data;
    }, error => console.log('Erro!', error));
  }

}
