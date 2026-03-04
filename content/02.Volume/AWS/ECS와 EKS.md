### ECS(Elastic Container Service)
: AWS가 제공해주는 [[컨테이너 오케스트레이션]] 서비스입니다.
### EKS(Elastic kubernetes Service)
: [[쿠버네티스(Kubernetes)]]를 AWS의 다른 서비스들과 연동해서 사용할 수 있게 해주는 AWS 서비스입니다. 

> [!note]
> 
> - ECS와 EKS는 둘 다 [[컨테이너 오케스트레이션]]을 지원해주는 서비스입니다.
> - 컴퓨팅 자원으로 [[파게이트(Fargate)]]를 지정할 수 있습니다.
> - 표준화된 [[배포 파이프라인(Deployment Pipeline)]]을 사용할 수 있습니다.

ECS와 EKS의 핵심 목표는 ==‘컨테이너 기술의 안정적 운영’==임.

![[ECS와 EKS의 차이점]]

ECS는 AWS기반에서는 비교적 쉽고 빠르게 사용 가능 하지만 다른 환경으로의 이식이 어렵고,
EKS는 러닝커브가 가파르고 복잡도가 높지만 이식성이 매우 높음.

ECS와 EKS는 모두 [[클러스터(Cluster)]] 형태로 구현됨.
