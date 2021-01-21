import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'convert'})


export class ConvertPipe implements PipeTransform {
    transform(value: any, args?: number): number {
        return value * 0.65;
    }
}