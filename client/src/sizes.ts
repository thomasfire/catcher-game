export const screenWidth: number = window.innerWidth;
export const screenHeight: number = window.innerHeight;
export const gameWidth: number = Math.min(screenWidth, screenHeight * 3/2);
export const gameHeight: number = Math.min(screenWidth * 2/3, screenHeight);

export const gameStartY: number = (screenHeight - gameHeight) / 2;
export const gameStartX: number = (screenWidth - gameWidth) / 2;

export const basketWidth: number = gameWidth / 4;
export const basketHeight: number = basketWidth / 757 * 874;
export const itemWidth: number = basketWidth / 3;

export const basketPositionY: number = gameHeight + gameStartY - basketHeight;

export const scoreCounterWidth: number = gameWidth / 16;
export const timeCounterWidth: number = gameWidth / 16;