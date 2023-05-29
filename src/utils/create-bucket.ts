import { S3 } from 'aws-sdk';
import { CreateBucketRequest } from 'aws-sdk/clients/s3';

import { config } from '../config';
import { Logger } from '@nestjs/common';
import { S3CreateBucketException } from '../modules/errors/s3-errors';

/**
 * @name createBucket
 * @param {S3} s3
 * @returns {Promise<{success:boolean; message: string; data: string;}>}
 */
export const createBucket = async (s3: S3) => {
  const logger = new Logger('createBucket');

  const params: CreateBucketRequest = {
    Bucket: config.bucket_name,
    CreateBucketConfiguration: {
      // Set your region here
      LocationConstraint: config.region,
    },
  };

  try {
    const res = await s3.createBucket(params).promise();

    logger.log('Bucket Created Successfully', res.Location);
  } catch (error) {
    logger.error('Error: Unable to create bucket', error);
    throw new S3CreateBucketException('Unable to create bucket' + error);
  }
};
