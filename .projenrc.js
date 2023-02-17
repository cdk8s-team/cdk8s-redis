const { Cdk8sTeamJsiiProject } = require('@cdk8s/projen-common');

const project = new Cdk8sTeamJsiiProject({
  name: 'cdk8s-redis',
  defaultReleaseBranch: 'main',
  description: 'Basic implementation of a Redis construct for cdk8s.',
  stability: 'experimental',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  peerDeps: [
    'cdk8s',
    'constructs',
  ],
  devDeps: [
    '@cdk8s/projen-common',
  ],
  keywords: [
    'cdk8s',
    'redis',
    'database',
    'cache',
    'kubernetes',
    'containers',
  ],
});

project.synth();
