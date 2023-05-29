import { S3 } from 'aws-sdk';

import { checkBucket } from './check-bucket';
import { createBucket } from './create-bucket';

import { config } from '../config';
import { S3BucketNotExistException } from '../modules/errors/s3-errors';

/**
 * @name initBucket
 * @returns {void}
 */
export const initBucket = async (s3: S3) => {


  try {
    await checkBucket(s3, config.bucket_name);
  } catch (error) {
    if (error instanceof S3BucketNotExistException) {
      await createBucket(s3);
    } else {
        throw error;
    }
  }
};
