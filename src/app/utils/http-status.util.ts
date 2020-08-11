import {OperatorFunction, pipe} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export enum HttpStatusEnum {
  idle,
  loading,
  failed,
  successfully
}

export class HttpStatusUtil {
  constructor() {
  }

  get idle(): boolean {
    return this.status === HttpStatusEnum.idle;
  }

  get failed(): boolean {
    return this.status === HttpStatusEnum.failed;
  }

  get loading(): boolean {
    return this.status === HttpStatusEnum.loading;
  }

  get successfully(): boolean {
    return this.status === HttpStatusEnum.successfully;
  }

  private status: HttpStatusEnum = HttpStatusEnum.idle;

  static getNewInstance(): HttpStatusUtil {
    return new HttpStatusUtil();
  }

  setIdle(): void {
    this.status = HttpStatusEnum.idle;
  }

  setFailed(): void {
    this.status = HttpStatusEnum.failed;
  }

  setLoading(): void {
    this.status = HttpStatusEnum.loading;
  }

  setSuccessfully(): void {
    this.status = HttpStatusEnum.successfully;
  }
}

// tslint:disable-next-line:typedef
export function withHttpStatus<T, R>(status: HttpStatusUtil, fn: OperatorFunction<T, R>) {
  return pipe(
    tap(() => status.setLoading()),
    fn,
    tap(() => status.setSuccessfully()),
    catchError((error, caught) => {
      status.setFailed();
      throw error;
    })
  );
}

