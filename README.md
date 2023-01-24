
### Para o kind
1 kind create cluster --name apmdatadog --config kind/cluster.yaml

2 kubectl cluster-info --context kind-apmdatadog

3 kind load docker-image  nome_da_image --name apmdatadog


### Para instalacao do Agent do DataDog (DaemonSet)

helm install datadog -f values.yaml  --set datadog.apiKey=cAPI_KEY_VALUE datadog/datadog

helm upgrade datadog -f values.yaml  --set datadog.apiKey=cAPI_KEY_VALUE datadog/datadog