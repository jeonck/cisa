---
sidebar_position: 2
title: 4.1 IT 자산 및 구성 관리
---

# IT 자산 및 구성 관리
**IT Asset Management & Configuration (ITAM/CMDB)**

:::info 관련 표준
CISA Domain 4.1 / ISO/IEC 19770-1 SAM 프로세스 프레임워크 / ITIL v4 자산 및 구성 관리 / NIST SP 800-88 미디어 삭제 지침
:::

| 항목 | 내용 |
|------|------|
| **문서번호** | BP-OPS-01 |
| **제개정일** | 2025-01-15 |
| **관리부서** | IT 자산관리팀 |
| **적용범위** | 전사 IT 하드웨어/소프트웨어 자산 |
| **통제목적** | IT 자산의 전 수명주기 가시성 확보 및 무단 자산 통제를 통한 재무·보안·컴플라이언스 리스크 최소화 |

---

## 1. 개요 및 배경

**ITAM(IT Asset Management)**은 조직이 보유한 모든 IT 자산의 재무적(Financial), 계약적(Contractual), 인벤토리(Inventory) 정보를 통합·관리하는 체계적 프로세스이다. CISA 시험에서 Domain 4는 IT 운영의 통제 효과성을 평가하며, ITAM은 다음 세 가지 관리 축의 교집합에서 최대 가치를 창출한다.

- **재무 관리(Financial Management):** 자산 취득비용, 감가상각, 총소유비용(TCO: Total Cost of Ownership) 산정
- **계약 관리(Contract Management):** 소프트웨어 라이선스, 유지보수 계약, 워런티 만료 추적
- **인벤토리 관리(Inventory Management):** 자산 위치, 할당 현황, 구성 변경 이력 추적

ITAM이 부재하거나 형식적으로 운영될 경우, 미사용 라이선스 과잉 구매, 섀도우 IT(Shadow IT) 확산, 폐기 자산의 데이터 유출 등 중대한 리스크가 발생한다. 감사인은 ITAM 통제의 설계 적정성(Design Effectiveness)과 운영 효과성(Operating Effectiveness)을 모두 검증해야 한다.

---

## 2. 핵심 개념 및 원칙

### 2.1 자산 인벤토리(Asset Register) 필수 기재 항목

자산 대장(Asset Register)은 ITAM의 핵심 산출물로, 아래 항목이 빠짐없이 관리되어야 한다.

| 필드명 | 설명 | 비고 |
|--------|------|------|
| **자산 ID** | 고유 식별자 (바코드/QR 코드 연계) | 중복 불가 |
| **자산 유형** | 하드웨어/소프트웨어/가상/클라우드 | 분류 체계 정의 필요 |
| **위치** | 데이터센터 랙/층/사무실 좌석 | GPS 좌표 병기 권장 |
| **소유자(Owner)** | 부서/개인 책임자 | 퇴직자 갱신 절차 필수 |
| **취득일** | 구매 또는 배포 일자 | 계약서·영수증 보관 |
| **취득 비용** | 구매가/라이선스 비용 | 감가상각 기산점 |
| **워런티 만료일** | 제조사 보증 기간 종료일 | 60일 전 알림 설정 |
| **폐기 예정일** | 감가상각 완료 또는 EOL(End of Life) 기준 | 교체 계획 연동 |
| **현재 상태** | 운영/저장/수리/폐기 예정 | 주기적 실물 확인 |

### 2.2 CMDB(Configuration Management Database)

CMDB는 IT 인프라를 구성하는 모든 구성 항목(CI: Configuration Item)과 그 상호 관계를 저장하는 중앙 데이터베이스이다.

**CI 주요 유형:**
- **하드웨어 CI:** 서버, 네트워크 장비, 스토리지, 단말기
- **소프트웨어 CI:** OS, 미들웨어, 애플리케이션, 데이터베이스
- **서비스 CI:** 비즈니스 서비스, IT 서비스, 인프라 서비스
- **문서 CI:** 정책, 절차서, 계약서, SLA 문서

**CI 관계 유형:**

| 관계 유형 | 예시 | 감사 중요성 |
|-----------|------|------------|
| **의존(Depends On)** | 애플리케이션 → 데이터베이스 서버 | 영향 범위 파악 |
| **구성(Is Part Of)** | NIC → 서버 | 자산 계층 무결성 |
| **호스팅(Runs On)** | 가상머신 → 하이퍼바이저 | 가상화 환경 추적 |
| **연결(Connected To)** | 서버 → 스위치 포트 | 네트워크 의존성 |

**CMDB 무결성 검증 방법:**
1. **자동 검색(Auto-Discovery):** CMDB와 실제 환경 자동 비교 (주간/일간 스캔)
2. **조정(Reconciliation):** 자동 검색 결과와 CMDB 불일치 항목 정기 정합
3. **CI 감사 추적(Audit Trail):** 모든 CMDB 변경에 변경 요청 번호(RFC) 연계

### 2.3 소프트웨어 라이선스 관리(SAM: Software Asset Management)

**라이선스 유형별 컴플라이언스 체크 기준:**

| 라이선스 유형 | 계량 기준 | 과소 보유 리스크 | 주요 감사 포인트 |
|---------------|-----------|-----------------|-----------------|
| **Per Device** | 설치된 기기 수 | 벌금·계약 위반 | 설치 현황 vs 라이선스 수 비교 |
| **Per User** | 사용자 계정 수 | 동일 | 활성 계정 vs 라이선스 비교 |
| **Concurrent** | 동시 접속자 수 | 동일 | 피크타임 동시 접속 로그 확인 |
| **Subscription** | 구독 기간·수량 | 자동 갱신 과잉 | 갱신일 알림, 사용률 확인 |
| **Enterprise** | 전사 계약 | 범위 초과 사용 | 계약 범위 명확화 |
| **Open Source** | 라이선스 조건 준수 | GPL 전파(Copyleft) | SBOM(Software BOM) 관리 |

### 2.4 자산 폐기(Disposal) 및 데이터 완전 삭제

자산 폐기 시 데이터 잔류(Data Remanence) 리스크 제거는 핵심 보안 통제이다.

**주요 데이터 삭제 표준:**

| 표준 | 덮어쓰기 횟수 | 적용 미디어 | 특이사항 |
|------|--------------|------------|---------|
| **DoD 5220.22-M** | 3회 (0→1→랜덤) | HDD | 미국 국방부 기준 |
| **NIST SP 800-88** | 미디어 유형별 차등 | HDD/SSD/플래시 | Clear·Purge·Destroy 3단계 |
| **물리 파괴** | N/A | SSD/미디어 | 전자파 파괴·분쇄 |
| **암호화 삭제** | 키 파기 | 암호화 스토리지 | Cryptographic Erasure |

---

## 3. 프로세스 / 방법론

### 3.1 자산 수명주기(Asset Lifecycle) 6단계

```mermaid
flowchart LR
    A["요청<br/>(Request)"]
    B["조달<br/>(Procurement)"]
    C["배포<br/>(Deployment)"]
    D["운영<br/>(Operations)"]
    E["유지보수<br/>(Maintenance)"]
    F["폐기<br/>(Disposal)"]

    A --> B --> C --> D --> E --> F

    A:::blue
    B:::purple
    C:::teal
    D:::green
    E:::orange
    F:::navy

    classDef blue fill:#2563EB,stroke:#1D4ED8,color:#fff
    classDef purple fill:#7C3AED,stroke:#6D28D9,color:#fff
    classDef teal fill:#0891B2,stroke:#0E7490,color:#fff
    classDef green fill:#16A34A,stroke:#15803D,color:#fff
    classDef orange fill:#EA580C,stroke:#C2410C,color:#fff
    classDef navy fill:#1E3A5F,stroke:#1E3A5F,color:#fff
```

### 3.2 단계별 핵심 활동 및 통제

| 단계 | 핵심 활동 | 필수 통제 | 산출물 |
|------|-----------|-----------|--------|
| **1. 요청** | 사업 필요성 정의, 예산 승인 | 이중 승인(Dual Approval), 중복 구매 방지 | 구매 요청서(PR) |
| **2. 조달** | 벤더 선정, 계약·라이선스 체결 | 조달 정책 준수, 계약 검토 | 계약서, 발주서(PO) |
| **3. 배포** | 수령 검수, CMDB 등록, 사용자 할당 | 인수 검수 체크리스트, 즉시 자산 등록 | 자산 태그, CMDB 레코드 |
| **4. 운영** | 일상 사용, 변경 관리 연계 | 무단 변경 통제, 정기 실물 조사 | 변경 이력, 실물 조사 보고서 |
| **5. 유지보수** | 패치·업그레이드, 수리 | 변경 요청(RFC) 승인, 보증 확인 | 유지보수 기록, 패치 이력 |
| **6. 폐기** | 데이터 삭제, 물리 폐기, CMDB 갱신 | 데이터 삭제 증적, 폐기 승인 | 폐기 증명서, 삭제 확인서 |

### 3.3 ISO/IEC 19770-1 SAM 프로세스 프레임워크

ISO/IEC 19770-1은 SAM의 글로벌 표준으로, 4개 Tier 구조로 성숙도를 정의한다.

| Tier | 명칭 | 핵심 요건 | 감사 확인 사항 |
|------|------|-----------|---------------|
| **Tier 1** | 신뢰할 수 있는 데이터 | 정확한 자산 인벤토리 | 자산 대장 완전성 |
| **Tier 2** | 실용적 관리 | 라이선스 포지션 관리 | 라이선스 갭 분석 |
| **Tier 3** | 운영 통합** | ITSM·조달 프로세스 통합 | 프로세스 연계 확인 |
| **Tier 4** | 최적화** | TCO 최적화, 전략 연계 | KPI 달성률 |

---

## 4. CISA 감사 체크리스트

<table>
  <colgroup>
    <col style={{width: '7%'}} />
    <col style={{width: '23%'}} />
    <col style={{width: '38%'}} />
    <col style={{width: '32%'}} />
  </colgroup>
  <thead>
    <tr><th>ID</th><th>통제 목적</th><th>감사 수행 절차</th><th>필수 증적 파일</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AUD-01</strong></td>
      <td>자산 인벤토리 완전성 확보 — 모든 IT 자산이 자산 대장에 등록되어 있는지 확인</td>
      <td>
        1. 자산 대장 전체 목록 입수<br/>
        2. 자동 검색(Auto-Discovery) 도구 스캔 결과와 대장 비교<br/>
        3. 미등록 자산(섀도우 IT) 규모 산정<br/>
        4. 샘플링으로 물리적 실물 확인(현장 방문)<br/>
        5. 자산 소유자 정보 최신성 검토(퇴직자 자산 포함)
      </td>
      <td>자산 대장(Asset Register) 최신본<br/>Auto-Discovery 스캔 보고서<br/>실물 조사 체크시트<br/>불일치 현황 및 조치 이력</td>
    </tr>
    <tr>
      <td><strong>AUD-02</strong></td>
      <td>CMDB 최신성 유지 — CI 정보가 실제 환경과 일치하며 변경 이력이 추적 가능한지 확인</td>
      <td>
        1. CMDB에서 주요 CI(서버·네트워크·DB) 샘플 추출<br/>
        2. 실제 구성과 CMDB 등록 정보 비교(IP·OS·패치 수준)<br/>
        3. 최근 3개월 변경 요청(RFC) 대비 CMDB 반영 여부 확인<br/>
        4. CMDB 업데이트 책임 R&R 문서 확인<br/>
        5. 미승인 CI 변경 감사 추적 로그 검토
      </td>
      <td>CMDB 현황 스냅샷<br/>RFC(변경 요청) 목록 및 완료 확인서<br/>CMDB 감사 추적 로그<br/>조정(Reconciliation) 보고서</td>
    </tr>
    <tr>
      <td><strong>AUD-03</strong></td>
      <td>소프트웨어 라이선스 컴플라이언스 — 실제 설치 수량이 보유 라이선스 범위 내에 있는지 확인</td>
      <td>
        1. 라이선스 계약서 및 구매 이력 수집<br/>
        2. 소프트웨어 배포 관리 도구에서 설치 현황 추출<br/>
        3. 라이선스 갭(Gap) 분석 수행: 설치 수 - 보유 라이선스 수<br/>
        4. 오픈소스 소프트웨어 SBOM 검토 및 GPL 컴플라이언스 확인<br/>
        5. SAM 프로세스 성숙도 평가(ISO 19770-1 Tier)
      </td>
      <td>라이선스 계약서 사본<br/>소프트웨어 설치 현황 리포트<br/>라이선스 갭 분석 결과<br/>SBOM(Software Bill of Materials)<br/>SAM 도구 대시보드 캡처</td>
    </tr>
    <tr>
      <td><strong>AUD-04</strong></td>
      <td>자산 폐기 데이터 삭제 증적 확보 — 폐기 자산의 데이터가 복구 불가능하게 삭제되었는지 확인</td>
      <td>
        1. 최근 1년 폐기 자산 목록 입수(CMDB 폐기 레코드)<br/>
        2. 각 폐기 자산별 데이터 삭제 방법 및 표준 적용 여부 확인<br/>
        3. 삭제 증명서(Certificate of Destruction) 수집 및 검토<br/>
        4. 고감도 데이터 보유 자산(임원 PC·서버)의 물리 파괴 여부 확인<br/>
        5. 제3자 폐기 업체의 자격증명(NAID, R2) 보유 여부 검토
      </td>
      <td>폐기 자산 목록<br/>데이터 삭제 증명서(CoD)<br/>물리 파괴 사진·영상 기록<br/>폐기 업체 자격증명 사본<br/>CMDB 폐기 상태 업데이트 확인</td>
    </tr>
  </tbody>
</table>

---

## 5. 관련 표준 및 참고

| 표준/프레임워크 | 발행 기관 | 핵심 내용 | CISA 연관성 |
|----------------|-----------|-----------|------------|
| **ISO/IEC 19770-1** | ISO/IEC | SAM 프로세스 요구사항 (4 Tier) | 라이선스 컴플라이언스 감사 기준 |
| **ISO/IEC 19770-2** | ISO/IEC | 소프트웨어 식별 태그(SWID Tag) | 자동 인벤토리 수집 기반 |
| **ITIL v4 AMCM** | Axelos | 자산·구성 관리 베스트 프랙티스 | CMDB 운영 프로세스 |
| **NIST SP 800-88** | NIST | 미디어 삭제 지침 (Clear·Purge·Destroy) | 폐기 데이터 삭제 표준 |
| **DoD 5220.22-M** | 미 국방부 | NISPOM 데이터 삭제 기준 | 고보안 환경 폐기 기준 |
| **COBIT 2019** | ISACA | BAI09 자산 관리 프로세스 | CISA 거버넌스 프레임워크 |

---

## 관련 문서

- [4.2 서비스 수준 및 운영 통제](/docs/it-operations/itsm)
- [4.4 BCP/DRP (비즈니스 연속성 및 재해 복구)](/docs/it-operations/bcp-drp)
- [5.1 정보보안 정책 및 조직](/docs/information-security/security-policy)
- [2.1 IT 거버넌스 프레임워크](/docs/it-governance/governance-framework)
- [감사 도구 및 기법](/docs/audit-toolkits/audit-tools)
