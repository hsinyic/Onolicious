module.exports = {
  setupFiles: ['<rootDir>/tests/setup.js'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}