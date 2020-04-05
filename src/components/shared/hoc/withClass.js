import React from 'react';

export const withClass = (WrappedComponent, classList) => {
  return props => {
    return (
      <div className={classList}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}


