import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: ['src/index.js', 'src/Box/index.js'],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  preserveModules: true,
  external: ['react', 'react-dom', 'react-native'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    resolve(),
  ],
};
