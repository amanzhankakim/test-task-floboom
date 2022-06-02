import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable } from "rxjs";
import { TokensService } from "src/tokens/tokens.service";

@Injectable()
export class AuthInterceptor<T> implements NestInterceptor<T> {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const request = context.switchToHttp().getRequest();
        console.log(request.query["token"])
		return next.handle().pipe(
			catchError((err) => {
				throw err;
			})
		);
	}
}
