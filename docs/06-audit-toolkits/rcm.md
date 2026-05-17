---
sidebar_position: 2
title: 6.1 RCM 라이브러리
---

# RCM (Risk Control Matrix) 라이브러리
**Risk Control Matrix Library**

:::info 활용 안내
RCM은 IT 감사의 핵심 작업 문서로, 위험-통제-테스트를 하나의 매트릭스에 연결합니다.
각 프로세스별 RCM을 활용하여 감사 범위를 체계적으로 설계하고, 통제 효과성을 평가하세요.
참조 표준: `[CISA Domain 2.0 / COBIT 2019 / ISO 27001:2022]`
:::

<table>
  <colgroup>
    <col style={{width: '20%'}} />
    <col style={{width: '80%'}} />
  </colgroup>
  <tbody>
    <tr><td><strong>문서 번호</strong></td><td>BP-TKT-01</td></tr>
    <tr><td><strong>소관 부서</strong></td><td>IT 감사실</td></tr>
    <tr><td><strong>적용 범위</strong></td><td>전사 IT 감사 활동</td></tr>
    <tr><td><strong>참조 표준</strong></td><td>ISACA ITAF 3rd Edition, COBIT 2019, ISO/IEC 27001:2022</td></tr>
    <tr><td><strong>최초 제정일</strong></td><td>2024-01-01</td></tr>
    <tr><td><strong>최근 개정일</strong></td><td>2025-05-18</td></tr>
    <tr><td><strong>버전</strong></td><td>v2.1</td></tr>
  </tbody>
</table>

---

## 1. 개요 및 배경

### 1.1 RCM이란

RCM(Risk Control Matrix, 위험-통제 매트릭스)은 감사 대상 프로세스에 존재하는 **위험(Risk)**과 그 위험을 완화하는 **통제(Control)**, 그리고 통제 효과성을 검증하는 **테스트(Test)**를 하나의 문서에 체계적으로 연결한 핵심 감사 작업 문서입니다.

RCM은 다음 세 가지 근본 질문에 답합니다:

- **무엇이 잘못될 수 있는가?** — 위험 식별 및 설명
- **무엇이 그것을 막는가?** — 통제 활동 식별
- **통제가 실제로 작동하는가?** — 테스트 절차 설계

### 1.2 RCM의 역할과 가치

| 역할 | 설명 |
|------|------|
| **감사 범위 설계** | 고위험 영역에 감사 자원을 집중 배분 |
| **통제 효과성 평가** | 설계 효과성(Design)과 운영 효과성(Operating) 동시 평가 |
| **증거 관리** | 테스트 결과와 필수 증적을 체계적으로 연결 |
| **의사소통 도구** | 감사팀, 경영진, 외부 감사인 간 공통 언어 제공 |
| **연속성 확보** | 감사 히스토리 축적 및 연도별 비교 분석 지원 |

---

## 2. 핵심 구조 및 원칙

### 2.1 RCM 5대 구성요소

<table>
  <colgroup>
    <col style={{width: '20%'}} />
    <col style={{width: '80%'}} />
  </colgroup>
  <tbody>
    <tr>
      <td><strong>위험 설명</strong><br/>(Risk Description)</td>
      <td>
        감사 대상 프로세스에서 발생 가능한 부정적 사건을 구체적으로 기술합니다.<br/>
        작성 원칙: "만약 [원인]이 발생한다면, [결과]가 초래될 수 있다"는 인과 구조로 서술<br/>
        예시: "IT 시스템에 대한 접근 권한이 적절히 관리되지 않을 경우, 무권한자에 의한 데이터 침해가 발생할 수 있다"
      </td>
    </tr>
    <tr>
      <td><strong>통제 목적</strong><br/>(Control Objective)</td>
      <td>
        해당 위험을 완화하기 위해 통제가 달성해야 하는 목적을 기술합니다.<br/>
        COSO 또는 COBIT 통제 목적과 연계하여 작성하며, 측정 가능하게 표현합니다.<br/>
        예시: "시스템 접근은 업무상 필요성이 승인된 사용자에게만 부여되고 정기적으로 검토된다"
      </td>
    </tr>
    <tr>
      <td><strong>통제 활동</strong><br/>(Control Activity)</td>
      <td>
        통제 목적을 달성하기 위해 실제로 수행되는 절차를 기술합니다.<br/>
        누가(Who), 언제(When), 어떻게(How) 수행하는지를 명시하며, 통제 수행 주기를 포함합니다.<br/>
        예시: "IT 관리자는 매분기 전체 사용자 계정 목록을 추출하여 부서장 검토 및 서명을 받는다"
      </td>
    </tr>
    <tr>
      <td><strong>통제 유형</strong><br/>(Control Type)</td>
      <td>
        통제를 기능(예방/탐지/교정)과 수행 주체(수동/자동)에 따라 분류합니다.<br/>
        통제 유형은 테스트 전략과 샘플링 규모를 결정하는 핵심 기준입니다.
      </td>
    </tr>
    <tr>
      <td><strong>테스트 절차</strong><br/>(Test Procedure)</td>
      <td>
        통제 효과성을 검증하기 위한 감사인의 구체적 수행 절차를 기술합니다.<br/>
        질의(Inquiry), 관찰(Observation), 검사(Inspection), 재수행(Reperformance) 중 적용 기법을 명시하고, 샘플 규모와 선정 기준을 포함합니다.
      </td>
    </tr>
  </tbody>
</table>

### 2.2 통제 유형 분류 매트릭스

<table>
  <colgroup>
    <col style={{width: '20%'}} />
    <col style={{width: '26%'}} />
    <col style={{width: '27%'}} />
    <col style={{width: '27%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>구분</th>
      <th>예방 통제 (Preventive)</th>
      <th>탐지 통제 (Detective)</th>
      <th>교정 통제 (Corrective)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>수동 (Manual)</strong></td>
      <td>
        - 접근 요청 승인 프로세스<br/>
        - 변경 사전 검토 및 승인<br/>
        - 직무 분리 정책 시행
      </td>
      <td>
        - 접근 로그 수동 검토<br/>
        - 예외 보고서 검토<br/>
        - 계정 주기적 재검토
      </td>
      <td>
        - 발견된 이상 계정 수동 비활성화<br/>
        - 패치 수동 적용<br/>
        - 사고 대응 절차 수행
      </td>
    </tr>
    <tr>
      <td><strong>자동 (Automated)</strong></td>
      <td>
        - 역할 기반 접근 통제(RBAC)<br/>
        - 다중 인증(MFA) 강제 적용<br/>
        - 변경 관리 시스템 워크플로
      </td>
      <td>
        - SIEM 이상 탐지 규칙<br/>
        - IDS/IPS 자동 경고<br/>
        - 접근 이상 자동 알림
      </td>
      <td>
        - 자동 계정 잠금 정책<br/>
        - 자동 패치 배포(WSUS/SCCM)<br/>
        - 백업 자동 복구 스크립트
      </td>
    </tr>
  </tbody>
</table>

**통제 강도 우선순위**: 자동 예방 > 자동 탐지 > 수동 예방 > 수동 탐지 > 교정

---

## 3. 실무 적용 가이드

### 3.1 RCM 작성 4단계

```mermaid
flowchart LR
  A["1단계<br/>프로세스 분해"] --> B["2단계<br/>위험 식별"]
  B --> C["3단계<br/>통제 매핑"]
  C --> D["4단계<br/>테스트 설계"]
  D --> E["결과 평가<br/>및 문서화"]

  style A fill:#2563EB,stroke:#1D4ED8,color:#fff
  style B fill:#7C3AED,stroke:#6D28D9,color:#fff
  style C fill:#EA580C,stroke:#C2410C,color:#fff
  style D fill:#0891B2,stroke:#0E7490,color:#fff
  style E fill:#16A34A,stroke:#15803D,color:#fff
```

**1단계 — 프로세스 분해**: 감사 대상 프로세스를 하위 단계(subprocess)로 분해하고, 각 단계의 입력/처리/출력을 파악합니다. 프로세스 흐름도(Process Flow Diagram)를 작성하여 통제 포인트를 시각화합니다.

**2단계 — 위험 식별**: 각 프로세스 단계에서 발생 가능한 위험을 식별합니다. 브레인스토밍, 과거 감사 결과, 업계 위험 라이브러리(COBIT, CISA 도메인)를 참고합니다. 위험은 발생 가능성(Likelihood)과 영향도(Impact)로 평가합니다.

**3단계 — 통제 매핑**: 식별된 각 위험에 대응하는 기존 통제를 매핑합니다. 통제가 없는 위험(Control Gap)을 식별하고, 통제 설계 적절성(Design Effectiveness)을 1차 평가합니다.

**4단계 — 테스트 설계**: 각 통제의 운영 효과성(Operating Effectiveness)을 검증하기 위한 테스트 절차를 설계합니다. 통제 유형(자동/수동, 빈도)에 따라 적절한 샘플 규모를 결정합니다.

### 3.2 샘플 규모 가이드라인 (PCAOB AS 2315 기준)

| 통제 수행 빈도 | 모집단 규모 | 권장 샘플 수 |
|----------------|-------------|--------------|
| 연간 (Annual) | N/A | 1~2개 |
| 분기 (Quarterly) | 4 | 2~4개 |
| 월간 (Monthly) | 12 | 2~5개 |
| 주간 (Weekly) | 52 | 5~15개 |
| 일간 (Daily) | 250+ | 25개 |
| 자동 통제 (IT Automated) | N/A | 1개 + IPE 검증 |

---

## 4. ITGC 프로세스별 RCM 샘플

### 4.1 접근 관리 (Access Management) RCM

<table>
  <colgroup>
    <col style={{width: '6%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '10%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>위험ID</th>
      <th>위험 설명</th>
      <th>통제 목적</th>
      <th>통제 활동</th>
      <th>통제 유형</th>
      <th>테스트 절차</th>
      <th>필수 증적</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AM-01</td>
      <td>무권한 사용자가 시스템에 접근하여 데이터를 열람·변조·삭제할 수 있다</td>
      <td>시스템 접근은 업무상 필요성이 승인된 사용자에게만 부여된다</td>
      <td>IT 관리자는 신규 접근 요청 시 부서장 승인 후 계정을 생성하며, 최소 권한 원칙을 적용한다 (일간 수행)</td>
      <td>수동<br/>예방</td>
      <td>감사기간 중 신규 계정 생성 전수 추출 후 25건 샘플링하여 부서장 승인 서명 확인 및 부여된 권한의 업무 적합성 검증</td>
      <td>접근 요청 양식, 부서장 승인 이메일, IAM 시스템 계정 생성 로그</td>
    </tr>
    <tr>
      <td>AM-02</td>
      <td>퇴직·부서 이동 직원의 계정이 적시에 삭제·변경되지 않아 무단 접근이 발생할 수 있다</td>
      <td>인사 변경 발생 시 시스템 접근이 즉시 갱신된다</td>
      <td>HR 시스템과 IAM 시스템 연동을 통해 퇴직 처리 시 자동으로 계정이 비활성화되며, IT 관리자는 익일 처리 결과를 검토한다 (자동+일간 수동 검토)</td>
      <td>자동<br/>예방<br/>+ 수동 탐지</td>
      <td>감사기간 중 퇴직자 HR 기록 25건 샘플링하여 계정 비활성화 타임스탬프가 퇴직일 당일 또는 익일인지 확인</td>
      <td>HR 퇴직 처리 기록, IAM 계정 비활성화 로그, 일일 예외 보고서</td>
    </tr>
    <tr>
      <td>AM-03</td>
      <td>과도한 권한을 보유한 계정(특권 계정 포함)이 악용되어 중대한 시스템 침해가 발생할 수 있다</td>
      <td>사용자 접근 권한은 최소 권한 원칙을 준수하며 정기적으로 검토된다</td>
      <td>IT 감사자 및 시스템 관리자는 매분기 전체 사용자 권한 목록을 추출하여 부서장이 각 구성원의 접근 적정성을 검토·서명한다 (분기 수동)</td>
      <td>수동<br/>탐지</td>
      <td>감사기간 내 분기별 접근 검토 완료 증적 전수 확인 및 검토 완료 후 조치된 계정 변경 내역 확인 (2~4건 샘플)</td>
      <td>분기별 접근 권한 검토 서명 양식, 권한 변경 티켓, 권한 목록 스크린샷</td>
    </tr>
  </tbody>
</table>

### 4.2 변경 관리 (Change Management) RCM

<table>
  <colgroup>
    <col style={{width: '6%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '10%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>위험ID</th>
      <th>위험 설명</th>
      <th>통제 목적</th>
      <th>통제 활동</th>
      <th>통제 유형</th>
      <th>테스트 절차</th>
      <th>필수 증적</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CM-01</td>
      <td>승인되지 않은 변경이 운영 환경에 배포되어 시스템 장애 또는 보안 취약점이 발생할 수 있다</td>
      <td>운영 환경의 모든 변경은 적절한 권한을 가진 승인자에 의해 사전 승인된다</td>
      <td>변경 관리 시스템(ServiceNow 등)에 변경 요청을 등록하고, CAB(Change Advisory Board)의 사전 승인 없이는 배포가 불가하도록 워크플로가 잠금 처리된다 (자동 예방)</td>
      <td>자동<br/>예방</td>
      <td>감사기간 운영 배포 건수 전수 추출 후 25건 샘플링하여 CAB 승인 타임스탬프가 배포 타임스탬프보다 이전인지 확인; 승인자 권한 목록과 대조</td>
      <td>변경 요청 티켓(CAB 승인 포함), 배포 로그, 승인권자 목록</td>
    </tr>
    <tr>
      <td>CM-02</td>
      <td>개발·테스트 환경의 변경 사항이 충분한 테스트 없이 운영에 반영되어 오류가 발생할 수 있다</td>
      <td>변경 사항은 운영 환경 배포 전 독립적인 테스트 환경에서 충분히 검증된다</td>
      <td>변경 관리 절차는 개발 → 테스트 → UAT → 운영 환경 순서를 의무화하며, 각 단계의 테스트 결과 및 승인이 변경 티켓에 첨부된 경우에만 배포를 허용한다 (수동 예방)</td>
      <td>수동<br/>예방</td>
      <td>25건 샘플 변경 티켓에 테스트 결과 문서와 UAT 서명이 첨부되어 있는지 확인; 테스트 담당자가 개발자와 다른 독립적 주체인지 직무 분리 검증</td>
      <td>변경 티켓, 테스트 결과 보고서, UAT 서명 기록, 환경별 배포 로그</td>
    </tr>
    <tr>
      <td>CM-03</td>
      <td>긴급 변경(Emergency Change)이 정규 절차를 우회하여 적용되어 추적 불가 상태가 될 수 있다</td>
      <td>긴급 변경도 사후 검토를 통해 승인 및 문서화된다</td>
      <td>긴급 변경 적용 후 24시간 이내에 CAB 사후 검토 회의를 개최하고, 변경 내역을 문서화하며 책임자 서명을 받는다 (수동 탐지)</td>
      <td>수동<br/>탐지</td>
      <td>감사기간 내 긴급 변경 전수 추출 후 전건 사후 검토 기록 확인; 24시간 내 처리 여부 및 CAB 서명 확인</td>
      <td>긴급 변경 신청서, CAB 사후 검토 회의록, 변경 타임스탬프 로그</td>
    </tr>
  </tbody>
</table>

### 4.3 운영 관리 (Operations Management) RCM

<table>
  <colgroup>
    <col style={{width: '6%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '10%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>위험ID</th>
      <th>위험 설명</th>
      <th>통제 목적</th>
      <th>통제 활동</th>
      <th>통제 유형</th>
      <th>테스트 절차</th>
      <th>필수 증적</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OP-01</td>
      <td>시스템에 알려진 취약점이 적시에 패치되지 않아 보안 침해가 발생할 수 있다</td>
      <td>Critical 취약점은 30일, High 취약점은 60일 이내에 패치가 완료된다</td>
      <td>보안팀은 취약점 스캐너(Nessus/Qualys)를 주간 실행하고, Critical/High 취약점 발견 시 자동으로 티켓을 생성하여 SLA 기간 내 패치 완료를 추적한다 (자동 탐지)</td>
      <td>자동<br/>탐지</td>
      <td>감사기간 내 취약점 스캔 보고서 3회분 입수; Critical 취약점 전수 및 High 취약점 25건 샘플링하여 패치 완료 티켓과 재스캔 결과로 SLA 준수 여부 확인</td>
      <td>취약점 스캔 보고서, 패치 티켓, 재스캔 결과 보고서, SLA 추적 현황표</td>
    </tr>
    <tr>
      <td>OP-02</td>
      <td>서버 성능 저하 또는 장애가 모니터링되지 않아 비즈니스 중단이 발생할 수 있다</td>
      <td>시스템 성능 지표가 실시간 모니터링되며, 임계치 초과 시 즉시 알림이 발송된다</td>
      <td>모니터링 도구(Zabbix/Datadog)는 CPU, 메모리, 디스크 사용률을 실시간 수집하고, 사전 정의된 임계치(예: CPU 90% 초과) 발생 시 운영팀에 자동 알림을 발송한다 (자동 탐지)</td>
      <td>자동<br/>탐지</td>
      <td>모니터링 도구 설정 화면에서 임계치 설정값 캡처; 감사기간 내 알림 발송 로그 5건 샘플링하여 담당자 대응 기록 확인</td>
      <td>모니터링 임계치 설정 화면, 알림 발송 로그, 장애 대응 티켓</td>
    </tr>
  </tbody>
</table>

### 4.4 백업 및 복구 (Backup and Recovery) RCM

<table>
  <colgroup>
    <col style={{width: '6%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '10%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>위험ID</th>
      <th>위험 설명</th>
      <th>통제 목적</th>
      <th>통제 활동</th>
      <th>통제 유형</th>
      <th>테스트 절차</th>
      <th>필수 증적</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BK-01</td>
      <td>정기 백업이 실패하거나 불완전하여 데이터 손실 발생 시 복구가 불가능할 수 있다</td>
      <td>중요 데이터는 정책에 따라 정기 백업되며, 백업 완료 여부가 매일 확인된다</td>
      <td>백업 소프트웨어(Veeam/Commvault)가 야간 자동 백업을 수행하고, 다음 날 아침 운영팀이 백업 완료 보고서를 검토하여 실패 항목을 즉시 재수행한다 (자동+수동 탐지)</td>
      <td>자동<br/>탐지<br/>+ 수동</td>
      <td>감사기간 내 일별 백업 완료 보고서 25일분 샘플링하여 백업 성공률 확인; 실패 발생 시 재수행 기록 확인</td>
      <td>일별 백업 완료/실패 보고서, 백업 로그, 재수행 기록, 담당자 검토 서명</td>
    </tr>
    <tr>
      <td>BK-02</td>
      <td>백업 데이터가 실제 복구 불가능한 상태임에도 정기 복구 테스트가 수행되지 않아 장애 발생 시 복구에 실패할 수 있다</td>
      <td>백업 데이터는 연간 최소 1회 이상 실제 복구 테스트를 통해 복구 가능성이 검증된다</td>
      <td>IT 운영팀은 매반기 격리된 테스트 환경에서 핵심 시스템의 백업 복구 테스트를 수행하고, 복구 성공 여부와 RTO/RPO 충족 여부를 문서화한다 (수동 탐지)</td>
      <td>수동<br/>탐지</td>
      <td>감사기간 내 복구 테스트 결과 보고서 전수 입수(연 2회); 테스트 수행일, 대상 시스템, 복구 소요 시간, RTO 충족 여부, 책임자 서명 확인</td>
      <td>복구 테스트 결과 보고서, 복구 소요 시간 기록, 테스트 환경 스크린샷, 책임자 서명</td>
    </tr>
    <tr>
      <td>BK-03</td>
      <td>백업 데이터가 원본 시스템과 동일한 위치에 보관되어 재해 발생 시 동시 손실될 수 있다</td>
      <td>백업 데이터는 원본과 물리적으로 분리된 오프사이트 또는 클라우드에 보관된다</td>
      <td>백업 정책에 따라 일별 백업 사본이 오프사이트 또는 클라우드 스토리지(AWS S3/Azure Blob)에 자동 복제되며, 월간 오프사이트 보관 현황이 점검된다 (자동 예방)</td>
      <td>자동<br/>예방</td>
      <td>백업 정책 문서에서 오프사이트 보관 요건 확인; 감사기간 내 3개월 오프사이트 복제 로그 확인 및 원본-복제본 무결성 해시 비교 기록 확인</td>
      <td>백업 정책 문서, 오프사이트 복제 로그, 클라우드 스토리지 보관 현황, 무결성 검증 기록</td>
    </tr>
  </tbody>
</table>

---

## 5. 관련 표준 및 참고

| 표준/프레임워크 | 관련 영역 | 참고 섹션 |
|----------------|-----------|-----------|
| ISACA ITAF 3rd Edition | 감사 작업 문서 기준 | Standard 1201, 1203 |
| COBIT 2019 | IT 프로세스 위험 및 통제 | DSS05, DSS06, BAI06 |
| ISO/IEC 27001:2022 | 정보보안 통제 | Annex A Control Set |
| PCAOB AS 2315 | 샘플 규모 가이드라인 | Audit Sampling |
| NIST SP 800-53 Rev.5 | 연방 IT 통제 기준 | AC, CM, SI, CP 계열 |

---

## 관련 문서

- [6.2 감사 조서 표준 템플릿](./working-papers)
- [6.3 상시 모니터링 대시보드](./monitoring-dashboard)
- [4.1 접근 통제](/docs/information-security/iam)
- [4.2 변경 관리](/docs/it-operations/patch-change)
