# In project root
docker build -t sahul/express-server:latest ./server

docker build -t sahul/angular-client:latest ./client

docker push sahul/express-server:latest

docker push sahul/angular-client:latest

# To install k3s (single-node Kubernetes) on EC2
# on the EC2 instance (as root or sudo)
curl -sfL https://get.k3s.io | sh -

# after install you can use kubectl (k3s bundles kubectl)
sudo kubectl get nodes

# Optional: copy the kubeconfig
sudo cat /etc/rancher/k3s/k3s.yaml

# ArgoCD setup
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# ArgoCD Port Forwarding
sudo kubectl port-forward svc/argocd-server -n argocd 8080:443 --address 0.0.0.0

# Get ArgoCD username and password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
