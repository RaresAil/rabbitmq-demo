To create the cluster operator:
```bash
kubectl apply -f https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml
```

To delete it:
```bash
kubectl delete -f https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml
```

To create the rabbitmq instances use:
```bash
kubectl apply -f k8s
```
