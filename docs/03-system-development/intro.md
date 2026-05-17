---
sidebar_position: 1
title: 도메인 개요
---

# 시스템 취득, 개발 및 구현 통제
**IS Acquisition, Development & Implementation — CISA Domain 3**

:::info 관련 표준
CISA Domain 3 / ISO/IEC 12207 / NIST SP 800-64 / OWASP
:::

소프트웨어와 인프라가 안전하고 무결하게 빌드되어 배포되는지 검증하는 영역입니다.

```mermaid
flowchart LR
    A["프로젝트 거버넌스<br/>및 타당성"] --> B["개발 프로세스<br/>통제(SDLC/DevSecOps)"]
    B --> C["형상 및<br/>릴리스 관리"]
    C --> D["사후 검토<br/>및 평가"]

    style A fill:#2563EB,stroke:#1D4ED8,color:#fff
    style B fill:#7C3AED,stroke:#6D28D9,color:#fff
    style C fill:#EA580C,stroke:#C2410C,color:#fff
    style D fill:#16A34A,stroke:#15803D,color:#fff
```

## 하위 항목

| 번호 | 주제 | 핵심 키워드 |
|------|------|------------|
| 3.1 | [프로젝트 거버넌스 및 타당성](./project-governance) | PMO, Agile, Waterfall, 타당성 분석 |
| 3.2 | [개발 프로세스 통제](./sdlc-devsecops) | SDLC, DevSecOps, SAST/DAST, CI/CD |
| 3.3 | [형상 및 릴리스 관리](./configuration-release) | 환경 분리, 이관 승인, 데이터 마이그레이션 |
| 3.4 | [사후 검토 및 평가](./post-implementation) | Value Realization, 결함 분석 |
