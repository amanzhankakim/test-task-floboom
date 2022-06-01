import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";
@Catch()
export class ErrorFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
		const response = context.getResponse<Response>();
		if (exception.message == "getaddrinfo ENOTFOUND db") {
			exception.message = "DB_CONNECTION_ERROR";
		}
		response.status(200).json({
			response: {
				status: -1,
				data: null,
			},
			error: {
				message: exception.message,
			},
		});

    }
}