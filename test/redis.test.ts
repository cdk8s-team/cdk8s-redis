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
  expect(redis.primaryHost).toEqual('test-redis-primary-service-c8f36e4b');
  expect(redis.replicaHost).toEqual('test-redis-replica-service-c814a5a4');
});

test('no replicas will deploy only the primary', () => {
  // GIVEN
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  // WHEN
  const redis = new Redis(chart, 'redis', {
    replicas: 0,
  });

  // THEN
  expect(Testing.synth(chart)).toMatchSnapshot();
  expect(redis.primaryHost).toEqual('test-redis-primary-service-c8f36e4b');
  expect(redis.primaryHost).toEqual(redis.replicaHost); // replica = primary
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
