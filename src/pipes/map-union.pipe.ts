import { Pipe, PipeTransform } from '@angular/core';

import { getUnionKey } from '../utils';

@Pipe({
    name: 'ccMapUnion',
})
export class MapUnionPipe<T extends object> implements PipeTransform {
    public transform(union: T, mapObject: { [N in keyof T]: string | number }) {
        return mapObject[getUnionKey(union)];
    }
}
