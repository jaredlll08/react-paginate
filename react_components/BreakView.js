'use strict';

import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const BreakView = props => {
  const { breakLabel, breakClassName, breakLinkClassName, href, as } = props;
  const className = breakClassName || 'break';

  return (
    <li className={className}>
      {href.length ? (
        <Link href={href} as={as}>
          <a className={breakLinkClassName} role="button" tabIndex="0">
            {breakLabel}
          </a>
        </Link>
      ) : (
        <span className={breakLinkClassName} role="button" tabIndex="0">
          {breakLabel}
        </span>
      )}
    </li>
  );
};

BreakView.propTypes = {
  breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  breakClassName: PropTypes.string,
  breakLinkClassName: PropTypes.string,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
};

export default BreakView;
