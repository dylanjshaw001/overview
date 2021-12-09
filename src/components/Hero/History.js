import React from 'react';

import NavigationIcon from '@material-ui/icons/Navigation';

import styled from 'styled-components';

import bosPng from './assets/boston_b.png';
import sdPng from './assets/sd_tree.png';
import nycPng from './assets/nyc';

const HistoryStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 100px 0 0 0;
  .loc-container {
    display: inline-flex;
    align-items: center;
  }
  .icon {
    margin-left: 2px;
    height: 20px;
  }
  .arrow {margin-left: 5px;}
  .pipe {margin: 0 10px;}
  `;

const History = (props) => {
  const locs = { 'BOS': bosPng, 'SD': sdPng, 'NYC': nycPng },
    locKeys = Object.keys(locs),
    locsPath = locKeys.map((loc, ind) => {
      const isLast = locKeys.length - 1 === ind,
        city = <span>{loc}</span>,
        icon = true ? <img className='icon' src={locs[loc]} alt='profile-loc-img' /> : null,
        delimeter = true ? (isLast ? null : <span className='arrow-navigation'><NavigationIcon /></span>) : (isLast ? null : <span className='pipe'>|</span>);
      return <div key={loc} className='loc-container'>{city}{icon}{delimeter}</div>;
    });

  return (
    <HistoryStyles>{locsPath}
    </HistoryStyles>
  );
}

export default React.memo(History);