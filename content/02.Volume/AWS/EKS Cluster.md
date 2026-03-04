## 📑 개념
> [!abstract] 
> AWS에서 사용할 수 있는 [[컨테이너 오케스트레이션]] 엔진
> 클러스터 형태로 구현해놓았고 그걸 EKS라고 함.


## 📝 노트
> [!note]
> 
>EKS Cluster의 구조는 크게 Control Plane과 Data Plane 둘로 나눠집니다.
> Control Plane은 전체적인 지휘소 역할을 하며 오케스트레이션에 필요한 모듈들이 위치하고, Data Plane은 실제 서비스가 돌아가는 자원들이 위치합니다.
> 
> 이미지를 보면 5개의 Node가 보이는데 각 노드들을 컨테이너를 담고 있는 가상서버이며 그 위에 실제 서비스 단위인 컨테이너가 구동됩니다.
> 
> 각 노드들에는 core-운, swing-cmms, load-balancer 컨테이너들이 구동되고 있습니다.
> 
> 로드밸런서는 앞서봤던 Elastic Load Balancer를 가리키는 포인터 역할의 서비스이며 CoreDNS는 클러스터 내부의 통신을 위해 필요한 필수 서비스입니다
> 
> Aws에 구현해놓은 cmms 서비스는 현재 이 다섯개의 컨테이너들로 구성되어서 실행되고 있습니다.
>
![[Pasted image 20260227162406.png]]

## EKS Cluster 기반의 아키텍처 구조도
![[Pasted image 20260227163046.png]]
## VPC 범위까지 확대
![[Pasted image 20260227163118.png]]
## 🔗 지식 연결
- **태그:** #cluster #container #kubernetes
- 관련 문서: [[ECS와 EKS의 차이점]] [[쿠버네티스(Kubernetes)]]