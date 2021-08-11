import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: IProduct | undefined;
  /**
   * para ativar as rotas e identificar o produto , injetamos no construtor a ativação da rota
   * para obter os metodos referentes a ela
   * usamos tambem o serviço router para fornecer rotas via código
   * @param route 
   */
  constructor(private route: ActivatedRoute, private router: Router) { }
 

  /**
   * abaixo criamos um metodo que volta para a lista de produtos usando o serviço de roteamento 
   * do router
   * apenas devemos usar o metodo navigate e indicar pra onde mandar
   * excelente para botões de salvar ou voltar 
   */
  onBack(): void {
    this.router.navigate(['/products'])
  }
  /**
   * após injetada temos acesso aos métodos de rotas
   * criamos uma variavel para armazenar o id do produto através dos metodos snapshot e paramMap
   * passando o id como referencia 
   * depois apenas associamos esse valor recuperado ao titulo da página , se tudo der certo a url e o
   * detalhe do produto terão o mesmo id
   */
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  }

}
