const { JsiiProject, Semver } = require('projen');

const project = new JsiiProject({
  name: 'cdk8s-redis',
  defaultReleaseBranch: 'master',
  description: 'redis constructs for cdk8s',
  repository: 'https://github.com/cdk8s-team/cdk8s-redis.git',
  authorName: 'Elad Ben-Israel',
  authorEmail: 'benisrae@amazon.com',
  stability: 'experimental',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  peerDeps: [
    'cdk8s',
    'constructs',
  ],
  publishToPypi: {
    distName: 'cdk8s-redis',
    module: 'cdk8s_redis',
  },
});

project.synth();
