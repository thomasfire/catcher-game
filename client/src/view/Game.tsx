import React, {useEffect} from "react";
import {Background} from "./Background";
import bg1 from '../../assets/bg1.png';
import {ItemCollection} from "./ItemCollection";
import {Basket} from "./Basket";
import {Arrow} from "./Arrow";
import {gameStartX, gameStartY, gameWidth} from "../sizes";
import {useKeyPress} from "../useKeyPress";
import {useDispatch} from "react-redux";
import {addNewItems, moveLeft, moveRight, startGame, tick} from "../store/gameSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {gameGenerator} from "../services/gameGenerator";
import {openPage, Page} from "../store/pageSlice";
import {Timer} from "./Timer";
import {Score} from "./Score";


export function Game() {
    const dispatch: Dispatch<any> = useDispatch();

    useKeyPress("ArrowRight", () => {
        dispatch(moveRight(null));
    }, () => {
    });
    useKeyPress("ArrowLeft", () => {
        dispatch(moveLeft(null));
    }, () => {
    });

    useEffect(() => {
        dispatch(startGame(null));
        const timeManager = gameGenerator(() => {
            dispatch(tick(null))
        }, () => {
            dispatch((addNewItems(null)))
        }, () => {
            dispatch(openPage(Page.SubmitResult))
        })
        return () => {
            if (timeManager.timer) clearInterval(timeManager.timer);
            if (timeManager.timeout) clearTimeout(timeManager.timeout);
        };
    }, [])

    return (
        <div className="w-screen">
            <Background background={bg1} style={{
                width: `${gameWidth}px`,
                top: `${gameStartY}px`,
                left: `${gameStartX}px`
            }}/>
            <ItemCollection/>
            <Basket/>
            <Arrow right={false}/>
            <Arrow right={true}/>
            <Timer/>
            <Score/>
        </div>
    );
}