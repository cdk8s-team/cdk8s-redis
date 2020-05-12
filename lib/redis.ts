import { Construct } from 'constructs';
import { ServiceDeployment } from './service-deployment';

export interface RedisOptions {
  /**
   * Number of slave replicas.
   * @default 2
   */
  readonly slaveReplicas?: number;

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
}

export class Redis extends Construct {
  /**
   * The DNS host for the master server.
   */
  public readonly masterServiceHost: string;

  /**
   * The DNS host for the slave service.
   */
  public readonly slaveServiceHost: string;

  constructor(scope: Construct, id: string, options: RedisOptions = { }) {
    super(scope, id);

    const master = new ServiceDeployment(this, 'master', {
      image: 'k8s.gcr.io/redis:e2e',
      containerPort: 6379,
      externalPort: 6379,
      containerName: 'master',
      env: { GET_HOSTS_FROM: 'dns' },
      labels: {
        app: 'redis',
        role: 'master',
        ...options.labels,
      },
    });

    const slave = new ServiceDeployment(this, 'slave', {
      image: 'gcr.io/google_samples/gb-redisslave:v1',
      containerName: 'slave',
      containerPort: 6379,
      externalPort: 6379,
      env: { GET_HOSTS_FROM: 'dns' },
      replicas: options.slaveReplicas ?? 2,
      labels: {
        app: 'redis',
        role: 'slave',
        ...options.labels,
      },
    });

    this.masterServiceHost = master.host;
    this.slaveServiceHost = slave.host;
  }
}
