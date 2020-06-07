'use strict';

import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const PageView = props => {
  let pageClassName = props.pageClassName;
  let pageLinkClassName = props.pageLinkClassName;

  const href = props.href;
  const as = props.as;
  let ariaLabel =
    props.ariaLabel ||
    'Page ' +
      props.page +
      (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  let ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';

    ariaLabel =
      props.ariaLabel || 'Page ' + props.page + ' is your current page';

    if (typeof pageClassName !== 'undefined') {
      pageClassName = pageClassName + ' ' + props.activeClassName;
    } else {
      pageClassName = props.activeClassName;
    }

    if (typeof pageLinkClassName !== 'undefined') {
      if (typeof props.activeLinkClassName !== 'undefined') {
        pageLinkClassName = pageLinkClassName + ' ' + props.activeLinkClassName;
      }
    } else {
      pageLinkClassName = props.activeLinkClassName;
    }
  }

  return (
    <li className={pageClassName}>
      {href.length ? (
        <Link href={href} as={as}>
          <a
            role="button"
            className={pageLinkClassName}
            tabIndex="0"
            aria-label={ariaLabel}
            aria-current={ariaCurrent}
          >
            {props.page}
          </a>
        </Link>
      ) : (
        <span
          role="button"
          className={pageLinkClassName}
          tabIndex="0"
          aria-label={ariaLabel}
          aria-current={ariaCurrent}
        >
          {props.page}
        </span>
      )}
    </li>
  );
};

PageView.propTypes = {
  selected: PropTypes.bool.isRequired,
  pageClassName: PropTypes.string,
  pageLinkClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  activeLinkClassName: PropTypes.string,
  extraAriaContext: PropTypes.string,
  href: PropTypes.string,
  as: PropTypes.string,
  ariaLabel: PropTypes.string,
  page: PropTypes.number.isRequired,
};

export default PageView;
