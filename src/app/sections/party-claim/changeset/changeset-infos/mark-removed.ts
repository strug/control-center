import { ChangesetInfo } from './changeset-info';

export const markRemoved = (infos: ChangesetInfo[], hash: string): ChangesetInfo[] => {
    return infos.map((info) => {
        if (info.hash === hash) {
            info.removed = true;
        }
        return info;
    });
};
