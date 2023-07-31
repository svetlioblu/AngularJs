//create manually!
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { ErrorService } from "./core/error/error.service";

const { apiUrl } = environment

@Injectable()
//1
export class AppInterceptor implements HttpInterceptor {
    constructor(private router: Router, private errorService: ErrorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                // will use all avalailable cookies on post
                withCredentials: true
            })
        }
        return next.handle(req).pipe(
            catchError((err) => {
                if (err.status == 401) {
                    this.router.navigate(['/auth/login'])
                } else {
                    this.errorService.setError(err)
                    this.router.navigate(['/error'])
                }
                return [err]
            })
        )
    }
}
//2
export const AppInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}

//3 add in app.module, providers