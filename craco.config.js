const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
	webpack: {
		alias: {
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@utils': path.resolve(__dirname, 'src/utils'),
		},
	},
	jest: {
		configure: {
			preset: 'ts-jest',
			moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
				prefix: '<rootDir>/src/',
			}),
		},
	},
};
