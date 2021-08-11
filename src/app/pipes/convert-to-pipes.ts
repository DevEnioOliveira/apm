import { Pipe, PipeTransform } from '@angular/core';


//dewcorator que indica o nome do pipe customizado
@Pipe({
    name: 'convertToSpaces'
})

// aqui implementamos a interface pipe transform e implementamos o metodo transform para 
//utilizar nosso pipe
export class ConvertToSpacesPipe implements PipeTransform{


    //abaixo o metodo responsavel por transformar os dados e manipular da forma como queremos
    // aqui apenas criamos um para substituir o traço pelo espaço no código do produto
    transform(value: string, character: string ):  string { 
        return value.replace(character,  ' ');
    }

}