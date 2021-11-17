import { Chart, Testing } from 'cdk8s';
import { Redis } from '../src/redis';

test('defaults', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  const redis = new Redis(chart, 'redis');

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
  expect(redis.masterHost).toEqual('test-redis-master-service-c852b917');
  expect(redis.slaveHost).toEqual('test-redis-slave-service-c8fdf1aa');
});

test('no slave replicas will deploy only the master', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  const redis = new Redis(chart, 'redis', {
    slaveReplicas: 0,
  });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
  expect(redis.masterHost).toEqual('test-redis-master-service-c852b917');
  expect(redis.masterHost).toEqual(redis.slaveHost); // slave = master
});

test('labels can be added', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  new Redis(chart, 'redis', {
    labels: {
      mylabel: '1234',
    },
  });

  // THEN
  const resources = Testing.synth(chart);

  for (const svc of resources.filter(r => r.kind === 'Service')) {
    expect(svc.metadata.labels.mylabel).toEqual('1234');
  }

  for (const dep of resources.filter(r => r.kind === 'Deployment')) {
    expect(dep.spec.selector.matchLabels.mylabel).toEqual('1234');
    expect(dep.spec.template.metadata.labels.mylabel).toEqual('1234');
  }
});
