import { clearNullFields } from '@cc/utils/thrift-utils';

import { DepositStatus } from '../thrift-services/fistful/gen-model/fistful_stat';

export const depositStatus = (status: DepositStatus): string =>
    Object.keys(clearNullFields(status))[0];
