# In project root
docker build -t sahul/express-server:latest ./server
docker build -t sahul/angular-client:latest ./client

docker push sahul/express-server:latest
docker push sahul/angular-client:latest

# ArgoCD setup
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# ArgoCD Port Forwarding
sudo kubectl port-forward svc/argocd-server -n argocd 8080:443 --address 0.0.0.0

# Get ArgoCD username and password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
