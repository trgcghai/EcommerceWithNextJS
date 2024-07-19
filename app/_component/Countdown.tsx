// components/Countdown.js
import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

interface CountdownTimerProps {
    targetDate: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed) {
            return <span>{"Time's up!"}</span>;
        } else {
            return (
                <div className='text-main font-bold text-2xl flex gap-2 items-center'>
                    <span className='p-1 inline-block text-center rounded-full aspect-square bg-main text-white font-bold text-2xl'>
                        {days.toString().padStart(2, '0')}
                    </span>
                    ngày
                    <span className='p-1 inline-block text-center rounded-full aspect-square bg-main text-white font-bold text-2xl'>
                        {hours.toString().padStart(2, '0')}
                    </span>
                    giờ
                    <span className='p-1 inline-block text-center rounded-full aspect-square bg-main text-white font-bold text-2xl'>
                        {minutes.toString().padStart(2, '0')}
                    </span>
                    phút
                    <span className='p-1 inline-block text-center rounded-full aspect-square bg-main text-white font-bold text-2xl'>
                        {seconds.toString().padStart(2, '0')}
                    </span>
                    giây
                </div>
            );
        }
    };

    return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
