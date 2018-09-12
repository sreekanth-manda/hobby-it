import React from 'react';
import { hobbiesPropType } from '../propTypes';
import classnames from 'classnames';
import Hobby from '../Hobby/Hobby'
import './Home.scss';
import WeekDays from '../WeekDays/WeekDays';
import Analytics from '../Analytics/Analytics';

export default function Home({ hobbies }) {
  return (
    <div className={classnames('hobbyit-home')}>
      <div  className={classnames('hobbyit-hobbies')}>
        {
          hobbies.map((hobby, index) => {
            console.log(hobby);
            return <Hobby hobby={hobby} key={index} />;
          })
        }
      </div>
      <div className='hobbyit--hobby-data'>
        <WeekDays />
        <Analytics hobbies={hobbies} />
      </div>
    </div>
  );
}

Home.propTypes = {
  hobbies: hobbiesPropType
}