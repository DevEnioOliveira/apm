import { Observable, Subscription } from 'rxjs';
import { ProductService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from "@angular/core"
import { IProduct } from "../models/product";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit, OnDestroy {

  /**
   * para usarmos de fato o serviço devemos inicializa-lo no construtor 
   * @param productService 
   */
  constructor(private productService: ProductService) { }

  pageTitle: string = "Product List"
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  //propriedade para armazenar os dados filtrados, já que quando usamos um filter ele refaz a lista apagando os resultados da antiga
  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];


  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    //aqui setamos a nova lista filtrada com um set para aparecer na tela e usar la no html
    this.filteredProducts = this.performFilter(value);
  }



  /**
   * aqui criamos uma função responsável por receber esse evento vindo da dom e do objeto filho
   * @param message 
   * @returns 
   */
  onRatingClicked(message: string) {
    return this.pageTitle = ' Product List: ' + message;
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  //função que filtra o nome na lista de produtos
  performFilter(filterBy: string): IProduct[] {
    //devemos unificar o padrão de string e colocar tudo para ser minusculo e assim não ocorrer erros de case sensitive
    filterBy = filterBy.toLocaleLowerCase();
    //depois retornamos a lista filtrada comparando o nome do produto da classe com o que passamos no input
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }


  //ng on init é um lifecycle hook que é usado para buscar dados assim que iniciar o modulo do angular
  //otimo para quando quisermos buscar algo do back end
  /**
   * após utilizarmos a requisição para o back end com o observable.. ´para que possamos receber
   * as informações devemos assinar , e para isso utilizamos o subscribe juunto do metodo de busca 
   * como no exemplo abaixo
   * dentro da inicialização do componente 
   */
  ngOnInit(): void {
    this.sub = this.productService.getProducts()
      .subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    
  }

  /**
   * ng on destroy é uma interface usada para destruir o componente ou os dados após a renderização do componente
   * quando usamos observables , devemos por padrão cancelar a assinatura e é aqui que usamos o metodo 
   * unsbuscribe para limpar os dados já utilizados
   */
 ngOnDestroy(): void {
   this.sub.unsubscribe();
 }

}