import { S3 } from 'aws-sdk';

let fs = require('fs');
import { config } from '../config';
import { Logger } from '@nestjs/common';
import { S3UploadFileException } from '../modules/errors/s3-errors';

/**
 * @name uploadToS3
 * @param {S3} s3
 * @param {File} fileData
 * @returns {Promise<{success:boolean; message: string; data: object;}>}
 */
export async function uploadToS3(s3: S3, fileData?: Express.Multer.File) {
  const logger = new Logger('uploadToS3');
  logger.log('uploadToS3()');
  try {
    const fileContent = fs.readFileSync(fileData.path);

    const params = {
      Bucket: config.bucket_name,
      Key: fileData!.originalname,
      Body: fileContent,
    };

    try {
      const res = await s3.upload(params).promise();

      logger.log('uploadToS3(): Upload successful', res.Location);
      return res.Location;
    } catch (error) {
      logger.error('uploadToS3(): Unable to upload file', error);
      throw new S3UploadFileException('Unable to upload file. Error: ' + error);
    }
  } catch (error) {
    if (error instanceof S3UploadFileException) {
      throw error;
    }
    logger.error('uploadToS3(): Unable to read file', error);
    throw new Error('Unable to read file. Error: ' + error);
  }
}
