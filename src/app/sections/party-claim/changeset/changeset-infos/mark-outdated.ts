import { ChangesetInfo } from './changeset-info';

export const markOutdated = (infos: ChangesetInfo[], hash: string): ChangesetInfo[] => {
    return infos.map((info) => {
        if (info.hash === hash) {
            info.outdated = true;
        }
        return info;
    });
};
