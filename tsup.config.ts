import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: ['src/index.ts'],
	outDir: 'lib',
	target: 'node18',
	format: ['cjs', 'esm'],
	clean: true,
	splitting: false,
	minify: true,
	bundle: true,
	dts: options.watch ? false : { resolve: true },
}));
