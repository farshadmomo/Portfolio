import {TouchEvent, useState} from "react";

interface SwipeInput {
    onSwipedUp: () => void
    onSwipedDown: () => void
}

interface SwipeOutput {
    onTouchStart: (e: TouchEvent) => void
    onTouchMove: (e: TouchEvent) => void
    onTouchEnd: () => void
}

export default (input: SwipeInput): SwipeOutput => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientY);
    }

    const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientY);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isUpSwipe = distance > minSwipeDistance;
        const isDownSwipe = distance < -minSwipeDistance;
        if (isUpSwipe) {
            input.onSwipedUp();
        }
        if (isDownSwipe) {
            input.onSwipedDown();
        }
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}
