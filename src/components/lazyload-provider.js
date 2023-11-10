'use client'
import React from 'react'
import PropTypes from 'prop-types'

import 'lazysizes';

function LazyloadProvider({ children }) {
  return children
}

LazyloadProvider.propTypes = {
  children: PropTypes.node
}

export default LazyloadProvider
