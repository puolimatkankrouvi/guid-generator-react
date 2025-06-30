
import { atom, selector } from "recoil";

export const guidsState = atom({
    key: "guids",
    default: [],
});

export const guidCountInputState = atom({
    key: "guidCountInput",
    default: "3",
});

export const maxGuidCountState = atom({
    key: "maxGuidCount",
    default: 100,
})

export const guidCountSelector = selector({
    key: "guidCountSelector",
    get: ({get}) => {
        const guidCount = parseInt(get(guidCountInputState));
        const maxGuidCount = get(maxGuidCountState);
        if (isFinite(guidCount) && 1 <= guidCount && guidCount <= maxGuidCount) {
            return guidCount;
        }

        return 0;
    }
});