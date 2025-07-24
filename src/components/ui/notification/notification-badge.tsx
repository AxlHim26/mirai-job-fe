import React from 'react';
import classNames from 'classnames';

type NotificationBadgeProps = {
  number: number;
  size?: number;
  className?: string;
};

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  number,
  size = 24,
  className,
}) => {
  const baseSize = `${size}px`;

  return (
    <div
      className={classNames(
        'flex items-center justify-center rounded-full bg-indigo-600 text-white font-medium',
        className
      )}
      style={{
        width: baseSize,
        height: baseSize,
        fontSize: `${size * 0.6}px`,
      }}
    >
      {number}
    </div>
  );
};
