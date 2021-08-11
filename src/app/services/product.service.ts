import { Observable, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { tap, catchError} from 'rxjs/Operators'
/**
 * usamos esse decorator para sinalizar que queremos usar injeção de dependencia 
 * dentro passamos um objeto para pode libera a injeção em qualquer componente dentro do app
 * 
 * caso precisemos usar em apenas um unico componente , devemos colocar dentro do decorator do componente
 * e identificar com a palavra PROVIDERS  e passar em um array os serviços que o componente injetará
 */
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    //primeiro criamos uma variavel para armazenar a url da api para buscar os dados
    private apiUrl: string = 'http://localhost:3000';

    /**
     * como precisamos fazer requisições para um servidor usamos o modulo http cliente no construtor
     * @param http 
     */
    constructor(private http: HttpClient){}


    /**
     * como a chamada é assincrona precisamos usar observables
     * passamos o tipo de resposta que esperamos da api
     * como esperamos um observable , precisamos tratar os erros e assinar com o SUBSCRIBE 
     * para poder utilizar desde recurso
     * o retorno da função é um observable do tipo products utilizando o metodo rest que queremos
     * passando dentro a url que vamos buscar
     * após isso utilizamos pipe( tubo de modificação ), para tratar os dados que retornaram ou a resposta
     * do servidor , abaixo tratamos transformando a resposta em json para string para melhor
     * visualização
     *  
     */
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.apiUrl + '/products')
        .pipe(tap(data => console.log('ALL: ', JSON.stringify(data))),
              catchError(this.handleError));
    }

    /**
     * como precisamos tratar os erros que podem acontecer na api precisamos tratar
     * então devemos criar um metodo para tratar desses erros que podem acontecer
     *  abaixo importamos o http error response que nos ajuda com metodos que facilitam
     * a visualização
     * após o tratamento retornamos o erro para a camada de visualização
     * 
     */
    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error ocurred: ${err.error.message}`
        } else {
            errorMessage = `Server returned code: ${err.status}, message: ${err.message}`
        }

        console.error(errorMessage);
        return throwError(errorMessage)
    }
}