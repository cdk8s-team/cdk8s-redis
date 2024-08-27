# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Redis <a name="Redis" id="cdk8s-redis.Redis"></a>

#### Initializers <a name="Initializers" id="cdk8s-redis.Redis.Initializer"></a>

```typescript
import { Redis } from 'cdk8s-redis'

new Redis(scope: Construct, id: string, options?: RedisOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-redis.Redis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-redis.Redis.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-redis.Redis.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s-redis.RedisOptions">RedisOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-redis.Redis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-redis.Redis.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-redis.Redis.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s-redis.RedisOptions">RedisOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-redis.Redis.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-redis.Redis.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-redis.Redis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-redis.Redis.isConstruct"></a>

```typescript
import { Redis } from 'cdk8s-redis'

Redis.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-redis.Redis.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-redis.Redis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-redis.Redis.property.primaryHost">primaryHost</a></code> | <code>string</code> | The DNS host for the primary service. |
| <code><a href="#cdk8s-redis.Redis.property.replicaHost">replicaHost</a></code> | <code>string</code> | The DNS host for the replica service. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-redis.Redis.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `primaryHost`<sup>Required</sup> <a name="primaryHost" id="cdk8s-redis.Redis.property.primaryHost"></a>

```typescript
public readonly primaryHost: string;
```

- *Type:* string

The DNS host for the primary service.

---

##### `replicaHost`<sup>Required</sup> <a name="replicaHost" id="cdk8s-redis.Redis.property.replicaHost"></a>

```typescript
public readonly replicaHost: string;
```

- *Type:* string

The DNS host for the replica service.

---


## Structs <a name="Structs" id="Structs"></a>

### RedisOptions <a name="RedisOptions" id="cdk8s-redis.RedisOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-redis.RedisOptions.Initializer"></a>

```typescript
import { RedisOptions } from 'cdk8s-redis'

const redisOptions: RedisOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-redis.RedisOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Extra labels to associate with resources. |
| <code><a href="#cdk8s-redis.RedisOptions.property.replicas">replicas</a></code> | <code>number</code> | Number of replicas. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s-redis.RedisOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

Extra labels to associate with resources.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-redis.RedisOptions.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number
- *Default:* 2

Number of replicas.

---



