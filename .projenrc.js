const { JsiiProject } = require('projen');

const project = new JsiiProject({
  name: 'cdk8s-redis',
  defaultReleaseBranch: 'master',
  description: 'redis constructs for cdk8s',
  repository: 'https://github.com/cdk8s-team/cdk8s-redis.git',
  authorName: 'Amazon Web Services',
  authorEmail: 'https://aws.amazon.com',
  stability: 'experimental',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  peerDeps: [
    'cdk8s',
    'constructs',
  ],
  keywords: [
    'cdk8s',
    'redis',
    'database',
    'cache',
    'kubernetes',
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
