- 작성 **날짜:** 2026-02-27

## 📑 개념
> [!abstract] 
> **AWS Fargate**는 Amazon ECS(Elastic Container Service)나 EKS(Elastic Kubernetes Service)에서 작동하는 [[서버리스(Serverless)]] 컴퓨팅 엔진입니다. 컨테이너를 실행하기 위해 가상 머신(EC2)을 직접 관리할 필요 없이, 컨테이너 단위로 배포하고 운영할 수 있게 해줍니다.

## 📌 주요 특징
- **관리 부담 제로 (No Infrastructure Management):** 더 이상 "윈도우 7 지원 종료"나 "서버 라이브러리 충돌" 같은 인프라 문제로 고민할 필요가 없습니다. OS 수준의 관리는 AWS가 책임집니다.
- **보안 및 격리 (Security by Design):** 각 컨테이너(Task)는 고유한 가상화 경계 내에서 실행되므로, 한 서비스의 장애나 보안 취약점이 다른 서비스로 전파되지 않습니다.
- **유연한 스케일링:** 트래픽이 몰릴 때 서버(Node)를 추가로 띄우는 복잡한 과정 없이, 컨테이너 수만 늘리면 AWS가 알아서 가용자원을 할당합니다.

## 🔗 지식 연결
- **태그:** #fargate
- 