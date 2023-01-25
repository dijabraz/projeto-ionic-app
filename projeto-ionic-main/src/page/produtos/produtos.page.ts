import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produto/produto.module';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


}
