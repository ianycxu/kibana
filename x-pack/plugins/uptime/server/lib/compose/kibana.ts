/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { UMKibanaBackendFrameworkAdapter } from '../adapters/framework';
import * as requests from '../requests';
import { licenseCheck } from '../domains';
import { UMDomainLibs, UMServerLibs } from '../lib';
import { UptimeCoreSetup } from '../adapters/framework';

export function compose(server: UptimeCoreSetup): UMServerLibs {
  const framework = new UMKibanaBackendFrameworkAdapter(server);

  const domainLibs: UMDomainLibs = {
    requests: {
      ...requests,
    },
    license: licenseCheck,
  };

  return {
    framework,
    ...domainLibs,
  };
}
