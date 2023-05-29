import { HttpException } from '@nestjs/common';

export class CreateHttpException extends HttpException {
  public translationKey: string;
  constructor(message, code, translationKey) {
    super(message, code);
    this.translationKey = translationKey;
  }
}
