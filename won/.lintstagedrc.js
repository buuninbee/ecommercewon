module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `pnpm run lint --fix . ${filenames.join(' --file')}`
  ]
}
