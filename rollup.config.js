import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import babel from 'rollup-plugin-babel'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'
import replace from '@rollup/plugin-replace'
// import del from 'rollup-plugin-delete'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import { defineConfig } from 'rollup'

const libraryName = 'sdk'
const production = process.env.NODE_ENV === 'production'
const runEnv = process.env.RUN_ENV
const release = process.env.RELEASE

function serve () {
  let server

  function toExit () {
    if (server) server.kill(0)
  }

  return {
    writeBundle () {
      if (server) return
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      })

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    }
  }
}

/**
 * 配置不同运行环境入口文件
 */
const entry = runEnv === 'h5' ? 'src/index.ts' : 'src/index.zfb.ts'
/**
 * 配置不同打包方式输出目录
 */
const outputDir = 'dist'

const outPutName = runEnv === 'h5' ? 'index' : 'zfb'

export default defineConfig([{
  input: entry,
  output: [
    { format: 'es', file: `${outputDir}/${outPutName}.js` },
    { format: 'umd', file: `${outputDir}/${outPutName}.umd.js`, name: libraryName, sourcemap: true }
  ],
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: true,
      mainFields: ['browser']
    }),
    builtins(),
    eslint({
      fix: true,
      throwOnError: true
    }),
    commonjs(),
    // del({ targets: `${outputDir}/*` }),
    replace({
      preventAssignment: true,
      'process.browser': true,
      /** 注入环境变量 */
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.RUN_ENV': JSON.stringify(process.env.RUN_ENV)
    }),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true
    }),
    json(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true // 配置runtime，不设置会报错
    }),
    sourceMaps(),

    /** 开发时启动demo页面服务 */
    !production && serve(),
    !production && livereload('demo'),

    /** 打包时对js进行压缩 */
    production && terser(),

    /** 打包时对js进行压缩 */
    copy({
      targets: [
        { src: 'dist/*', dest: 'releases' },
        { src: 'dist/*', dest: 'demo/public' },
        { src: 'dist/*', dest: 'demo-vue/public' },
        { src: 'dist/*', dest: 'demo-miniapp/libs' },
      ]
    })
  ],
  watch: {
    clearScreen: false
  }
},
/* 单独生成声明文件 */
{
  input: entry,
  plugins: [dts()],
  output: {
    format: 'esm',
    file: `${outputDir}/${outPutName}.d.ts`
  }
}
])
