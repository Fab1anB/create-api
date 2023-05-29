import { S3 } from 'aws-sdk';
import { Logger } from '@nestjs/common';
import { S3BucketNotExistException } from '../modules/errors/s3-errors';

/**
 * @name checkBucket
 * @param {S3} s3
 * @param bucket
 * @returns {Promise<{success:boolean; message: string; data:string;}>}
 */
export const checkBucket = async (s3: S3, bucket: string) => {
  const logger = new Logger('checkBucket');
  try {
    const res = await s3.headBucket({ Bucket: bucket }).promise();

    logger.log('Bucket already Exist', res.$response.data);
  } catch (error) {
    logger.error('Error bucket does not exist', error);

    throw new S3BucketNotExistException('S3 Bucket not exist');
  }
};
