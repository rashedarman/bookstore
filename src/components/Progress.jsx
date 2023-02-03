import PropTypes from 'prop-types';

import './Progress.scss';

const Progress = (props) => {
  const { progress } = props;

  return (
    <div className="progress-container">
      <div className="circular-progress-container">
        <div className="circular-progress" />
      </div>
      <div className="progress-stat">
        <p className="percent-complete">
          {progress}
          {'% '}
        </p>
        <p className="completed">Completed</p>
      </div>
      <div className="progress-divider" />
      <div className="current-chapter-container">
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">Introduction</p>
        </div>
        <div>
          <button className="primary-button" type="button">
            update progress
          </button>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Progress;
