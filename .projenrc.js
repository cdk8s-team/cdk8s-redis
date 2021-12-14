const { cdk } = require('projen');

const project = new cdk.JsiiProject({
  name: 'cdk8s-redis',
  defaultReleaseBranch: 'main',
  description: 'Basic implementation of a Redis construct for cdk8s.',
  repository: 'https://github.com/cdk8s-team/cdk8s-redis.git',
  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  stability: 'experimental',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  peerDeps: [
    'cdk8s',
    'constructs@^10',
  ],
  keywords: [
    'cdk8s',
    'redis',
    'database',
    'cache',
    'kubernetes',
    'containers',
  ],
  publishToPypi: {
    distName: 'cdk8s-redis',
    module: 'cdk8s_redis',
  },
  autoApproveOptions: {
    allowedUsernames: ['cdk8s-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
});

project.synth();
