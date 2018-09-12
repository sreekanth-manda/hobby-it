import React from 'react';
import { hobbyPropType } from '../propTypes';
import './Hobby.scss';
import WeekDays from '../WeekDays/WeekDays';

export default function Hobby({ hobby }) {
  console.log(hobby);
  return (
    <div className='hobbyit-hobby'>
      <span className='hobbyit-hobby__id'>{hobby.id}</span>
      <span className='hobbyit-hobby__name'>{hobby.name}</span>
    </div>
  );
}

Hobby.propTypes = {
  hobby: hobbyPropType
}