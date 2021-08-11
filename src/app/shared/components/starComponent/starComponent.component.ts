import { Component, Input, OnChanges, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './starComponent.component.html',
    styleUrls: ['./starComponent.component.css']
})

export class StarComponent implements OnChanges {



    /**
     * 
     * input decorator usamos na propriedade que queremos receber os valores dela de um container pai ...  , 
     * usamos esse decorator quando quisermos usar a lógica passar valores do pai para o filho
     *  
     */
    @Input() rating: number = 0;


    cropWidth: number = 0;

    /**
     * usamos o decorator OUTPUT quando queremos passar os valores do component filho de volta para componente container (pai)
     * como regra essa propriedade deve ser um evento pois ele obrigatoriamente emite um evento
     * abaixo o uso da propriedade instanciando um novo evento
     */
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter()


    /**
     * ng on changes é um lifecycle hook que toda vez que houver algum evento de mudança na dom ele realiza a lógica ...
     */
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
    }

    /**
     * associamos a propriedade com o decorator output à uma função que emita a ação para o container
     */
    onClick(): void {
        this.ratingClicked.emit(`Star Rating: ${this.rating}`)
    }
}