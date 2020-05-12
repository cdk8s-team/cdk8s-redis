# cdk8s-redis

> Redis constructs for cdk8s

Basic implementation of a Redis construct for cdk8s. Contributions are welcome!

## Usage

The following will define a Redis cluster with a master and 2 slave replicas:

```ts
import { Redis } from 'cdk8s-redis';

// inside your chart:
const redis = new Redis(this, 'my-redis');
```

DNS names can be obtained from `redis.masterHost` and `redis.slaveHost`. 

You can specify how many slave replicas to define:

```ts
new Redis(this, 'my-redis', {
  slaveReplicas: 4
});
```

Or, you can specify no slave:

```ts
new Redis(this, 'my-redis', {
  slaveReplicas: 0
});
```

## License

Distributed under the [Apache 2.0](./LICENSE) license.
