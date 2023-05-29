import { BadGatewayException, HttpException } from '@nestjs/common';
import { CreateHttpException } from './CreateHttpException';

export class S3UploadFileException extends CreateHttpException {
  constructor(message: string) {
    super(message, 400, 'Errors.S3.UploadFileException');
  }
}

export class S3ReadFileException extends CreateHttpException {
  constructor(message: string) {
    super(message, 400, 'Errors.S3.ReadFileException');
  }
}

export class S3BucketInitializationException extends CreateHttpException {
  constructor(message: string) {
    super(message, 400, 'Errors.S3.BucketInitializationException');
  }
}

export class S3BucketNotExistException extends CreateHttpException {
  constructor(message: string) {
    super(message, 400, 'Errors.S3.S3BucketNotExistException');
  }
}

export class S3CreateBucketException extends CreateHttpException {
  constructor(message: string) {
    super(message, 400, 'Errors.S3.S3CreateBucketException');
  }
}
