import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Produtos } from 'src/app/model/produto/produto.module';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  listaProdutos: Produtos[] = [];

  constructor(
    //Nosso serviço de banco de dados
    private DataBase: DatabaseService,
    //alertController - Ferramente que cria um alert
    private alertCtrl: AlertController,
    //ActionSheet
    private actionSheet: ActionSheetController,
    //Serviço de utilidades 
    private utilidades: UtilityService 
  ) { }

  ngOnInit(){
    //Carrega o metodo no inicio da pagina
    this.utilidades.carregando("Aguarde...", 900);
    this.DataBase.getItem().subscribe(results => this.listaProdutos = results);
  }

  //Metodo do botao excluir
  deletar(id: number){

    try{
      this.DataBase.delItem(id);  
    }catch(err){
      console.log(err);
    }finally{
      //Chama a menssagem 
      this.utilidades.toastando("Item Excluido", "bottom", 2000, "danger"); 
    }  
  } 

}
