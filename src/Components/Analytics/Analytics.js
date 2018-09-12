import React from 'react';
import GreenTick from '../GreenTick/GreenTick';
import RedCross from '../RedCross/RedCross';
import { format, getISOWeek } from 'date-fns';
import './Analytics.scss';

function generateStatus(days=[]) {
  return (
    days.map((status, index) => {
      return (
        <span key={index} className='hobbyit--day-status'>
          {status ? <GreenTick /> : <RedCross />}
        </span>
      )
    })
  );
}

export default function Analytics({ hobbies }) {
  const week = getISOWeek(new Date());
  return (
    <div className='hobbyit-analytics'>
      {
        hobbies.map((hobby, index) => {
          return <div key={index} className='hobbyit--week-status'>
            {
              generateStatus(hobby.state[week])
            }
          </div>
        })
      }
    </div>
  );
}