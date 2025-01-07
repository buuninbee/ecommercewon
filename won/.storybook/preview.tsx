import React from 'react'
import GloblaStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GloblaStyles />
      <Story />
    </>
  )
]
