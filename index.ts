import { merge, of } from 'rxjs';
import {
  map,
  mapTo,
  mergeAll,
  mergeMap,
  switchAll,
  switchMap,
} from 'rxjs/operators';

const x = of(of(100), of(200));

x.pipe(mergeAll()).subscribe((value) => console.log({ value }));

//switchAll() = switchMap((value) => value)
