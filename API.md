# API Reference

**Classes**

Name|Description
----|-----------
[Redis](#cdk8s-redis-redis)|*No description*


**Structs**

Name|Description
----|-----------
[RedisOptions](#cdk8s-redis-redisoptions)|*No description*



## class Redis 🔹 <a id="cdk8s-redis-redis"></a>



__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new Redis(scope: Construct, id: string, options?: RedisOptions)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **options** (<code>[RedisOptions](#cdk8s-redis-redisoptions)</code>)  *No description*
  * **labels** (<code>Map<string, string></code>)  Extra labels to associate with resources. __*Default*__: none
  * **slaveReplicas** (<code>number</code>)  Number of slave replicas. __*Default*__: 2



### Properties


Name | Type | Description 
-----|------|-------------
**masterHost**🔹 | <code>string</code> | The DNS host for the master server.
**slaveHost**🔹 | <code>string</code> | The DNS host for the slave service.



## struct RedisOptions 🔹 <a id="cdk8s-redis-redisoptions"></a>






Name | Type | Description 
-----|------|-------------
**labels**?🔹 | <code>Map<string, string></code> | Extra labels to associate with resources.<br/>__*Default*__: none
**slaveReplicas**?🔹 | <code>number</code> | Number of slave replicas.<br/>__*Default*__: 2



