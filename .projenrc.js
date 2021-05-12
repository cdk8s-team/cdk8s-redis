const { JsiiProject } = require('projen');

const project = new JsiiProject({
  name: 'cdk8s-redis',
  description: 'redis constructs for cdk8s',

  repository: 'https://github.com/cdk8s-team/cdk8s-redis.git',
  stability: 'experimental',
  defaultReleaseBranch: 'master',

  authorName: 'Elad Ben-Israel',
  authorEmail: 'benisrae@amazon.com',

  peerDependencies: [
    'cdk8s@^0.20.0',
    'constructs@^2.0.1',
  ],

  publishToPypi: {
    distName: 'cdk8s-redis',
    module: 'cdk8s_redis',
  },
});

project.synth();
