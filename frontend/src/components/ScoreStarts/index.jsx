import React from 'react';
import PropTypes from 'prop-types';

import starFilled from '../../images/star-filled.png';
import starEmpty from '../../images/star-empty.png';

import './style.css';

function ScoreStars(props) {
  const { score } = props;

  const numberOfStarts = Math.round(score / 80);
  const scoreRoundedDecimal = () => (<p>{Math.round((score / 80) * 10) / 10}</p>);

  const star = (isEmpty) => <img src={isEmpty ? starEmpty : starFilled} alt="star" />;

  const stars = () => ([5, 4, 3, 2, 1].map((starNumber) => {
    const isEmpty = (numberOfStarts - starNumber) > 0;
    return star(isEmpty);
  }));

  return (
    <div className="score-starts">
      {stars()}
      {scoreRoundedDecimal()}
    </div>
  );
}

ScoreStars.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreStars;
