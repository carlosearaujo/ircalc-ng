import { Injectable } from '@angular/core';
@Injectable()
export class ObjectUtils{
    public getEnumValues(enumerable){
        let values = []
        for(const member in enumerable){
            var isValueProperty = parseInt(member, 10) >= 0
            if(isValueProperty){
                values.push({value: enumerable[member]});
            }
        }
        return values
    }
}