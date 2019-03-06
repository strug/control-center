import { RemoveTerminalFromShopParams } from './remove-terminal-from-shop-params';
import { toGenCommit } from '../converters';
import { createRemoveTerminalFromProviderOperation } from './create-remove-terminal-from-provider-operation';
import { ProviderObject } from '../../gen-damsel/domain';
import { Commit } from '../../gen-damsel/domain_config';

export const createRemoveTerminalFromShopCommit = (
    providerObject: ProviderObject,
    params: RemoveTerminalFromShopParams
): Commit => {
    const updateProvider = {
        update: createRemoveTerminalFromProviderOperation(providerObject, params)
    };
    const commit = {
        ops: [updateProvider]
    };
    return toGenCommit(commit);
};
