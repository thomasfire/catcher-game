const INTERVAL = 1000 / 30;
export const GAME_LENGTH = 60 * 1000;
const NEW_ITEM_INTERVAL_MIN = 200;
const NEW_ITEM_INTERVAL_MAX = NEW_ITEM_INTERVAL_MIN * 4;

const generateRandomTime = (): number => Math.random() * (NEW_ITEM_INTERVAL_MAX - NEW_ITEM_INTERVAL_MIN) + NEW_ITEM_INTERVAL_MIN;


export type TimeManager = {
    timeout: ReturnType<typeof setTimeout> | null,
    timer: ReturnType<typeof setInterval> | null
};

export function gameGenerator(tickCallback: () => void, newItemCallback: () => void, onEndCallback: () => void): TimeManager {
    let nextNewItem = generateRandomTime();
    let counter = 0;
    let manager: TimeManager = {timeout: null, timer: null};

    manager.timer = setInterval(() => {
        tickCallback();
        counter++;
        if (counter * INTERVAL >= nextNewItem) {
            counter = 0;
            nextNewItem = generateRandomTime();
            newItemCallback();
        }
    }, INTERVAL);

    manager.timeout = setTimeout(() => {
        if (manager.timer) clearInterval(manager.timer);
        onEndCallback();
    }, GAME_LENGTH);

    return manager;
}

