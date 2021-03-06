/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { APICaller } from 'kibana/server';
import { TypeOf } from '@kbn/config-schema';

import { DeepPartial } from '../../../common/types/common';

import { validateJobSchema } from '../../routes/schemas/job_validation_schema';

import { ValidationMessage } from './messages';

export type ValidateJobPayload = TypeOf<typeof validateJobSchema>;

export function validateJob(
  callAsCurrentUser: APICaller,
  payload?: DeepPartial<ValidateJobPayload>,
  kbnVersion?: string,
  callAsInternalUser?: APICaller,
  isSecurityDisabled?: boolean
): Promise<ValidationMessage[]>;
