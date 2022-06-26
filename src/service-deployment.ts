import { Construct } from 'constructs';
import * as k8s from './imports/k8s';

export interface ServiceDeploymentOptions {
  /**
   * @default 1
   */
  readonly replicas?: number;

  /**
   * Container image.
   */
  readonly image: string;

  /**
   * Additional labels to apply to resources.
   * @default - none
   */
  readonly labels?: { [name: string]: string };

  /**
   * Pod resource requirements
   * @default - cpu: '100m', memory: '100Mi'
   */
  readonly resources?: k8s.ResourceRequirements;

  /**
   * @default 80
   */
  readonly externalPort?: number;

  /**
   * @default 8080
   */
  readonly containerPort?: number;

  /**
   * Environment variables to pass to the pod
   */
  readonly env?: { [name: string]: string };

  /**
   * The name of the container
   * @default 'app'
   */
  readonly containerName?: string;

  /**
   * The type of service resource.
   * @default ServiceType.CLUSTER_IP
   */
  readonly serviceType?: ServiceType;
}

export enum ServiceType {
  EXTERNAL_NAME = 'ExternalName',
  CLUSTER_IP = 'ClusterIP',
  NODE_PORT = 'NodePort',
  LOAD_BALANCER = 'LoadBalancer'
}

export class ServiceDeployment extends Construct {

  public readonly host: string;

  constructor(scope: Construct, id: string, options: ServiceDeploymentOptions) {
    super(scope, id);

    const replicas = options.replicas ?? 1;
    const resources = options.resources ?? { requests: { cpu: '100m', memory: '100Mi' } };
    const externalPort = options.externalPort ?? 80;
    const containerPort = options.containerPort ?? 8080;
    const containerName = options.containerName ?? 'app';
    const serviceType = options.serviceType ?? ServiceType.CLUSTER_IP;

    const label = {
      ...options.labels,
      app: this.node.addr,
    };

    const service = new k8s.Service(this, 'service', {
      metadata: { labels: label },
      spec: {
        type: serviceType,
        ports: [{ port: externalPort, targetPort: containerPort }],
        selector: label,
      },
    });


    new k8s.Deployment(this, 'deployment', {
      spec: {
        selector: { matchLabels: label },
        replicas: replicas,
        template: {
          metadata: { labels: label },
          spec: {
            containers: [
              {
                name: containerName,
                image: options.image,
                ports: [{ containerPort }],
                resources: resources,
                env: renderEnv(options.env),
              },
            ],
          },
        },
      },
    });

    this.host = service.name;
  }
}

function renderEnv(env: { [key: string]: string } = { }): k8s.EnvVar[] {
  const result = new Array<k8s.EnvVar>();
  for (const [key, value] of Object.entries(env)) {
    result.push({
      name: key,
      value: value,
    });
  }
  return result;
}