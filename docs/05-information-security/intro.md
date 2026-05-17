---
sidebar_position: 1
title: 도메인 개요
---

# 정보 자산 보호 및 보안 이벤트 관리
**Protection of Information Assets — CISA Domain 5**

:::info 관련 표준
CISA Domain 5 / ISO/IEC 27001 / NIST SP 800-53 / CIS Controls
:::

자산의 기밀성·무결성·가용성(CIA)을 지키기 위한 보안 통제 기준입니다.

```mermaid
flowchart LR
    subgraph CIA["CIA Triad"]
        direction TB
        C["기밀성<br/>(Confidentiality)"]
        I["무결성<br/>(Integrity)"]
        A2["가용성<br/>(Availability)"]
    end

    IAM["5.1 IAM"] --> C
    INFRA["5.2 인프라 보안"] --> I
    CLOUD["5.3 클라우드 보안"] --> A2
    CRYPTO["5.4 암호화/PKI"] --> C
    IR["5.5 침해사고 대응"] --> I

    style IAM fill:#2563EB,stroke:#1D4ED8,color:#fff
    style INFRA fill:#7C3AED,stroke:#6D28D9,color:#fff
    style CLOUD fill:#EA580C,stroke:#C2410C,color:#fff
    style CRYPTO fill:#0891B2,stroke:#0E7490,color:#fff
    style IR fill:#16A34A,stroke:#15803D,color:#fff
```

## 하위 항목

| 번호 | 주제 | 핵심 키워드 |
|------|------|------------|
| 5.1 | [ID 및 접근 관리 (IAM)](./iam) | 계정 수명주기, 최소 권한, PAM, Audit Trail |
| 5.2 | [인프라 및 서버 보안](./infrastructure-security) | 네트워크 세분화, IDS/IPS, OS Hardening |
| 5.3 | [클라우드 및 가상화 보안](./cloud-security) | 공동 책임 모델, CSPM, CWPP |
| 5.4 | [암호화 및 PKI](./cryptography) | At Rest/In Transit 암호화, 키 관리 |
| 5.5 | [침해사고 대응 및 디지털 포렌식](./incident-response) | SIEM/SOAR, 위협 인텔리전스, 포렌식 |
