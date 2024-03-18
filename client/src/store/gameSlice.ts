import {createSlice, Slice} from '@reduxjs/toolkit';
import {Item, ItemType, newRandomItem} from "./Item";

export type GameState = {
    score: number,
    basketPosition: number,
    itemsOnScreen: Item[],
    timeStarted: number | null,
    username: string | null
}

const RIGHT_LIMIT = 80;
const LEFT_LIMIT = -80;
const MOVE_STEP = 10;
const FALL_STEP = 1;
const VERTICAL_HEIGHT = 90;
const BASKET_COLLIDER_W = 20;
const ITEMS_PER_ADD = 1;

export function translatePosition(x: number, y: number): { x: number, y: number } {
    return {x: (x - LEFT_LIMIT) / (RIGHT_LIMIT - LEFT_LIMIT), y: y / VERTICAL_HEIGHT};
}

const randomItemX = () => Math.random() * (RIGHT_LIMIT - LEFT_LIMIT) + LEFT_LIMIT;

export const gameSlice: Slice = createSlice({
    name: 'game',
    initialState: {
        score: 0,
        basketPosition: 0,
        itemsOnScreen: [],
        timeStarted: null,
        username: null
    },
    reducers: {
        moveLeft: (state: GameState) => {
            state.basketPosition = Math.max(LEFT_LIMIT, state.basketPosition - MOVE_STEP);
        },
        moveRight: (state: GameState) => {
            state.basketPosition = Math.min(RIGHT_LIMIT, state.basketPosition + MOVE_STEP);
        },
        tick: (state: GameState) => {
            let newItems: Item[] = [];
            for (let item of state.itemsOnScreen) {
                item.positionV += FALL_STEP;
                if (item.positionV < VERTICAL_HEIGHT) {
                    newItems.push(item);
                } else if (item.positionH < state.basketPosition + BASKET_COLLIDER_W && item.positionH > state.basketPosition - BASKET_COLLIDER_W) {
                    state.score += item.score;
                }
            }
            state.itemsOnScreen = newItems;
        },
        addNewItems: (state: GameState) => {
            for (let i = 0; i < ITEMS_PER_ADD; i++) {
                const itemType: ItemType = newRandomItem();
                const item: Item = {
                    score: itemType.score,
                    icon: itemType.icon,
                    positionV: 0,
                    positionH: randomItemX()
                };
                state.itemsOnScreen.push(item);
            }
        },
        startGame: (state: GameState) => {
            state.timeStarted = new Date().getTime();
        },
        updateUsername: (state: GameState, action: {payload: string, type: string}) => {
            state.username = action.payload;
        },
        resetGame: (state: GameState) => {
            state.score = 0
            state.basketPosition = 0
            state.itemsOnScreen = []
            state.timeStarted = null
        }
    },
})

export const {moveLeft, moveRight, tick, startGame, addNewItems, updateUsername, resetGame} = gameSlice.actions

export default gameSlice.reducer;