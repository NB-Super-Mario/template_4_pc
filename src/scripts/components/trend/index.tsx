import React from 'react';
import classNames from 'classnames';
import './index.less';

const Trend = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className = '',
  ...rest
}) => {
  const classString = classNames(
    'trend-item',
    {
      'trend-item-grey': !colorful,
      'reverse-color': reverseColor && colorful
    },
    className
  );
  return (
    <div
      {...rest}
      className={classString}
      title={typeof children === 'string' ? children : ''}
    >
      <span>{children}</span>
      {flag && (
        <span className={`${flag}`}>
          <i className={`u-sort-${flag}`} />
        </span>
      )}
    </div>
  );
};

export default Trend;
