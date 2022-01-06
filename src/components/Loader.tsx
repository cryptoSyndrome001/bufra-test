import React, {FC, useEffect} from "react";
// @ts-ignore
import {progressJs} from "Progress.js/src/progress"
const Loader: FC = () => {
    useEffect(() => {
        progressJs().setOptions({
            overlayMode: true,
            theme: 'blueOverlay'
        }).start().autoIncrease(4, 500);
        return () => {
            progressJs().end()
        }
    }, [])
    return (
        <div className="loader"/>
    )
}

export default Loader
