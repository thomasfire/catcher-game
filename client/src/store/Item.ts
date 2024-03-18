import e1 from '../../assets/e1.png';
import e2 from '../../assets/e2.png';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';

export type Item = {
    score: number;
    positionV: number;
    positionH: number;
    icon: string;
}

export type ItemType = {
    score: number,
    icon: string
}

const collection: ItemType[] = [
    {score: 50, icon: p1},
    {score: 50, icon: p2},
    {score: 50, icon: p3},
    {score: 50, icon: p4},
    {score: -100, icon: e1},
    {score: -100, icon: e2},
];

export function newRandomItem(): ItemType {
    return collection[Math.floor((Math.random() * collection.length))]
}