import { Pipe, PipeTransform } from "@angular/core";
import { Noticias } from "src/app/models/noticias";

@Pipe({name: 'filterByDescription'})

export class FilterByDescription implements PipeTransform {
    transform(listaNoticias: Noticias[], descriptionQuery: string) {
       descriptionQuery = descriptionQuery.trim().toLowerCase()
       if(descriptionQuery) {
            return listaNoticias.filter(noticias => noticias.descricao.toLowerCase().includes(descriptionQuery))
       } else {
           return listaNoticias
       }
    }
    
}