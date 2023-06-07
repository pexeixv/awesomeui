export default {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'awesomeui',
        formats: ['es', 'cjs', 'umd', 'iife'],
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  };
  