import React from 'react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import './WeekDays.scss';
import classnames from 'classnames';

export default function WeekDays({ state }) {
  const days = ['S', 'M', 'Tu', 'W', 'Th', 'F', 'S'];
  const toDay = format(new Date(), 'd');
  const currentStartOfWeek = format(startOfWeek(new Date()), 'D MMM');
  const currentEndOfWeek = format(endOfWeek(new Date()), 'D MMM');
  return (
    <div className={classnames('hobbyit-week')}>
      <div className='hobbyit-week__heading'>
        <span className='hobbyit-week__start-of-week'>{currentStartOfWeek}</span>
        <span className='hobbyit-week__end-of-week'>{currentEndOfWeek}</span>
      </div>
      <div className='hobbyit-week__weekdays'>
        {
          days.map((day, index) => {
            return (
              <span className={classnames(
                'hobbyit-week__weekday',
                toDay === String(index) && 'hobbyit-week__weekday--highlight'
              )} key={index}>
                {day}
              </span>
            );
          })
        }
      </div>
    </div>
  );
}