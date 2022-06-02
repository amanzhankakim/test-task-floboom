import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";
@Catch()
export class ErrorFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
		let status = 500
        const context = host.switchToHttp();
		const response = context.getResponse<Response>();
		if (exception.message == "Unauthorized"){
			status = 401
		}
		response.status(status).json({
			response: {
				data: null,
			},
			error: {
				message: exception.message,
			},
		});

    }
}