import {v4 as uuid} from "uuid";

export const createGuids = (count) => {
    const guids = [];
    for (let i = 0; i < count; i++) {
        guids.push(uuid());
    }

    return guids;
};