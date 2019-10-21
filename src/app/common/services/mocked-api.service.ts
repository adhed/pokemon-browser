import { of } from 'rxjs/internal/observable/of';

export const mockedApiService = {
  getArray: (endpoint: string) => of(null),
  getSingle: (endpoint: string) => of(null),
};
