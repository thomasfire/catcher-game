import React, { useState, useEffect } from 'react';

export function useKeyPress(key: string, callbackDown: () => void, callbackUp: () => void): boolean {
    const [enterPressed, setEnterPressed] = useState<boolean>(false);

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === key) {
            setEnterPressed(true);
            callbackDown(); // Call the callback function
        }
    }

    function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === key) {
            setEnterPressed(false);
            callbackUp();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown as any);
        window.addEventListener('keyup', handleKeyUp as any);
        return () => {
            window.removeEventListener('keydown', handleKeyDown as any);
            window.removeEventListener('keyup', handleKeyUp as any);
        };
    }, []);

    return enterPressed;
}