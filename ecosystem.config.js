module.exports = {
    apps: [
      {
        name: 'cost-h5-server',
        script: 'cost-h5-server.js'
      },
    ],
    deploy: {
      production: {
        user: 'root',
        host: '182.92.105.28',
        ref: 'origin/master',
        repo: 'https://github.com/JamiLanister/cost-h5-vite.git',
        path: '/workspace/cost-h5-vite',
        'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
        env: {
          NODE_ENV: 'production'
        }
      }
    }
  }