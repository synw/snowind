import { ResponseErrorType } from "./interfaces";

/** Response error class */
class ResponseError extends Error {
  type: ResponseErrorType;
  response: Response;

  constructor(response: Response, type: ResponseErrorType, errMsg?: string) {
    super(response.statusText);
    this.name = `ResponseError (${type})`;
    this.stack = super.stack;
    this.response = response;
    this.type = type;
    let _message = "";
    if (errMsg) {
      _message = errMsg
    }
    if (type == "request") {
      _message = `${response.status.toString()} ${response.statusText}`
    }
    this.message = _message;
  }
}

export { ResponseError };