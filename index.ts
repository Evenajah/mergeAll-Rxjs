import { merge, of } from 'rxjs';
import {
  map,
  mapTo,
  mergeAll,
  mergeMap,
  switchAll,
  switchMap,
} from 'rxjs/operators';

const x = of(100, 200);

x.pipe(
  map((res) => of(res)),
  mergeAll()
).subscribe((value) => console.log({ value }));

//switchAll() = switchMap((value) => value)
