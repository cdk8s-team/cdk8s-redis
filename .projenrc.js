const { JsiiProject, Semver } = require('projen');

const project = new JsiiProject({
  name: 'cdk8s-redis',
  jsiiVersion: Semver.caret('1.5.0'),
  description: 'redis constructs for cdk8s',
  repository: 'https://github.com/eladb/cdk8s-redis.git',
  authorName: 'Elad Ben-Israel',
  authorEmail: 'benisrae@amazon.com',
  stability: 'experimental',
  peerDependencies: {
    cdk8s: Semver.caret('0.20.0'),
    constructs: Semver.caret('2.0.1'),
  },
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  python: {
    distName: 'cdk8s-redis',
    module: 'cdk8s_redis'
  }
});

project.synth();
