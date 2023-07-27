//create manually!
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const { apiUrl } = environment

@Injectable()
//1
export class AppInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                // will use all avalailable cookies on post
                withCredentials: true
            })
        }
        return next.handle(req)
    }
}
//2
export const AppInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}

//3 add in app.module, providers