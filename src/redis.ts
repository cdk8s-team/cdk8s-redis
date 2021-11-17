import { Construct } from 'constructs';
import { ServiceDeployment } from './service-deployment';

export interface RedisOptions {
  /**
   * Number of replicas.
   * @default 2
   */
  readonly replicas?: number;

  /**
   * Extra labels to associate with resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };
}

export class Redis extends Construct {
  /**
   * The DNS host for the primary service.
   */
  public readonly primaryHost: string;

  /**
   * The DNS host for the replica service.
   */
  public readonly replicaHost: string;

  constructor(scope: Construct, id: string, options: RedisOptions = { }) {
    super(scope, id);

    const primary = new ServiceDeployment(this, 'primary', {
      image: 'k8s.gcr.io/redis:e2e',
      containerPort: 6379,
      externalPort: 6379,
      containerName: 'primary',
      env: { GET_HOSTS_FROM: 'dns' },
      labels: {
        app: 'redis',
        role: 'primary',
        ...options.labels,
      },
    });

    this.primaryHost = primary.host;

    const replicas = options.replicas ?? 2;
    if (replicas > 0) {
      const replica = new ServiceDeployment(this, 'replica', {
        image: 'gcr.io/google_samples/gb-redisslave:v1',
        containerName: 'replica',
        containerPort: 6379,
        externalPort: 6379,
        env: { GET_HOSTS_FROM: 'env', REDIS_MASTER_SERVICE_HOST: this.primaryHost },
        replicas: replicas,
        labels: {
          app: 'redis',
          role: 'replica',
          ...options.labels,
        },
      });

      this.replicaHost = replica.host;
    } else {
      // if we have no slave, then use the same host as the primary
      this.replicaHost = primary.host;
    }
  }
}
