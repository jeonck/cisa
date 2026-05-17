---
sidebar_position: 3
title: 6.2 감사 조서 표준 템플릿
---

# 감사 조서 표준 템플릿
**Audit Working Paper Templates**

:::info 활용 안내
ISACA ITAF 3rd Edition 및 IIA 국제 내부감사 기준(IPPF)을 준수한 표준 양식입니다.
감사 조서는 감사 수행의 유일한 증거이므로, 작성 완료 후 반드시 상급자 검토를 받으십시오.
참조 표준: `[CISA Domain 2.0 / ISACA ITAF Standards 1201-1205 / IIA Standard 2330]`
:::

<table>
  <colgroup>
    <col style={{width: '20%'}} />
    <col style={{width: '80%'}} />
  </colgroup>
  <tbody>
    <tr><td><strong>문서 번호</strong></td><td>BP-TKT-02</td></tr>
    <tr><td><strong>소관 부서</strong></td><td>IT 감사실</td></tr>
    <tr><td><strong>적용 범위</strong></td><td>전사 IT 감사 프로젝트</td></tr>
    <tr><td><strong>참조 표준</strong></td><td>ISACA ITAF 3rd Edition, IIA IPPF 2330, ISO 19011:2018</td></tr>
    <tr><td><strong>최초 제정일</strong></td><td>2024-01-01</td></tr>
    <tr><td><strong>최근 개정일</strong></td><td>2025-05-18</td></tr>
    <tr><td><strong>버전</strong></td><td>v2.1</td></tr>
  </tbody>
</table>

---

## 1. 개요 및 배경

### 1.1 감사 조서의 목적

감사 조서(Audit Working Paper)는 감사인이 수행한 감사 절차, 수집한 증거, 도달한 결론을 체계적으로 기록한 문서입니다. 감사 조서는 다음의 목적을 가집니다:

| 목적 | 설명 |
|------|------|
| **증거 보전** | 감사 결론을 지지하는 증거의 보관 및 추적 |
| **품질 검토 지원** | 감사 책임자 및 외부 검토자의 품질 검증 기반 제공 |
| **책임 소재 명확화** | 각 절차의 수행자와 검토자를 명시하여 책임을 명확히 함 |
| **지식 축적** | 후속 감사 및 교육을 위한 실무 지식 축적 |
| **법적 방어** | 소송 또는 규제 조사 시 감사 수행의 법적 증거 |

### 1.2 7대 필수 기재 요소

모든 감사 조서는 아래 7개 요소를 반드시 포함해야 합니다:

<table>
  <colgroup>
    <col style={{width: '20%'}} />
    <col style={{width: '80%'}} />
  </colgroup>
  <tbody>
    <tr><td><strong>1. 목적 (Purpose)</strong></td><td>해당 조서가 달성하고자 하는 목적을 명확히 기술 (예: "본 조서는 접근 권한 검토 통제의 운영 효과성을 검증하기 위해 작성되었다")</td></tr>
    <tr><td><strong>2. 범위 (Scope)</strong></td><td>감사 대상 시스템, 기간, 모집단 크기, 샘플 선정 기준 명시</td></tr>
    <tr><td><strong>3. 수행자 (Preparer)</strong></td><td>조서를 작성한 감사인의 성명, 직급, 서명</td></tr>
    <tr><td><strong>4. 검토자 (Reviewer)</strong></td><td>조서를 검토한 상급 감사인의 성명, 직급, 서명</td></tr>
    <tr><td><strong>5. 날짜 (Date)</strong></td><td>조서 작성 완료일 및 검토 완료일 (수행일 ≠ 문서화일 주의)</td></tr>
    <tr><td><strong>6. 결론 (Conclusion)</strong></td><td>수행된 테스트를 기반으로 한 감사 결론 (효과적/비효과적/제한적 효과적)</td></tr>
    <tr><td><strong>7. 증거 참조 (Evidence Reference)</strong></td><td>첨부 증적 목록 및 전자 파일 경로 (예: "첨부 1: 계정 목록 스크린샷 - EV-AM01-001")</td></tr>
  </tbody>
</table>

### 1.3 품질 기준 SOUR

감사 조서의 품질은 **SOUR** 기준으로 평가됩니다:

| 기준 | 영문 | 설명 |
|------|------|------|
| **충분성** | Sufficient | 감사 결론을 지지하기에 충분한 양의 증거가 있는가 |
| **객관성** | Objective | 편견 없이 사실에 근거하여 작성되었는가 |
| **유용성** | Useful | 감사 목적과 결론에 직접적으로 기여하는가 |
| **관련성** | Relevant | 감사 목적 및 관련 통제와 직접 연관되는가 |

---

## 2. 핵심 구조 및 원칙

### 2.1 감사 조서 검토 및 승인 프로세스

```mermaid
flowchart LR
  A["조서 작성<br/>(감사인)"] --> B["1차 검토<br/>(선임 감사인)"]
  B --> C["감사 책임자<br/>최종 승인"]
  C --> D["전자 조서<br/>보관"]
  B -- "보완 요청" --> A

  style A fill:#2563EB,stroke:#1D4ED8,color:#fff
  style B fill:#7C3AED,stroke:#6D28D9,color:#fff
  style C fill:#EA580C,stroke:#C2410C,color:#fff
  style D fill:#16A34A,stroke:#15803D,color:#fff
```

### 2.2 조서 파일 명명 규칙

```
[프로젝트코드]-[조서유형]-[일련번호]-[버전]
예: ITGC2025-CTW-AM01-v1.0
```

| 조서 유형 코드 | 조서 유형명 |
|----------------|-------------|
| APM | 감사 계획서 (Audit Planning Memorandum) |
| CTW | 통제 테스트 조서 (Control Test Working Paper) |
| IR | 인터뷰 기록지 (Interview Record) |
| FF | 감사 지적사항 양식 (Finding Form) |
| FT | 후속 조치 추적표 (Follow-up Tracking) |

---

## 3. 실무 적용 가이드

### 3.1 전자 감사 조서 관리 기준

| 관리 항목 | 기준 |
|-----------|------|
| **버전 관리** | 수정 시 반드시 버전 번호 증가 (v1.0 → v1.1); 이전 버전은 삭제하지 않고 보존 |
| **접근 통제** | 감사팀 구성원에 한해 접근 허용; 외부 공유 시 감사 책임자 사전 승인 필수 |
| **암호화** | 민감 정보 포함 조서는 AES-256 암호화 적용 |
| **보존 기간** | 최소 5년 (법적 요구 또는 회사 정책에 따라 7~10년 연장 가능) |
| **백업** | 매일 자동 백업, 오프사이트 복제 보관 |
| **완결성 표시** | 최종 확정 조서는 PDF/A 형식으로 변환 후 잠금 처리 |

---

## 4. 감사 조서 유형별 표준 양식

### 양식 1: 감사 계획서 (APM — Audit Planning Memorandum)

<table>
  <colgroup>
    <col style={{width: '25%'}} />
    <col style={{width: '75%'}} />
  </colgroup>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>프로젝트 명칭</strong></td><td>[감사 프로젝트 공식 명칭 기재]</td></tr>
    <tr><td><strong>감사 목적</strong></td><td>본 감사는 [감사 대상]의 IT 일반 통제(ITGC)가 효과적으로 설계되고 운영되고 있는지를 평가하여, 재무보고 관련 IT 환경의 신뢰성을 확인하는 것을 목적으로 한다.</td></tr>
    <tr><td><strong>감사 범위</strong></td><td>- 대상 시스템: [ERP, 핵심 업무 시스템명]<br/><br/>- 대상 기간: [YYYY-MM-DD ~ YYYY-MM-DD]<br/><br/>- 감사 영역: 접근 관리, 변경 관리, 운영 관리, 백업 및 복구</td></tr>
    <tr><td><strong>감사 일정</strong></td><td>- 킥오프 미팅: [날짜]<br/><br/>- 현장 감사: [시작일 ~ 종료일]<br/><br/>- 초안 보고: [날짜]<br/><br/>- 최종 보고: [날짜]</td></tr>
    <tr><td><strong>감사팀 구성</strong></td><td>- 감사 책임자: [성명, 직급]<br/><br/>- 선임 감사인: [성명, 직급]<br/><br/>- 감사인: [성명, 직급]</td></tr>
    <tr><td><strong>접근 방법</strong></td><td>위험 기반 감사 접근법(Risk-Based Audit Approach)을 적용하며, 중점 위험 영역에 자원을 집중 배분한다. RCM을 기반으로 통제 테스트 범위를 결정한다.</td></tr>
    <tr><td><strong>위험 평가 요약</strong></td><td>사전 위험 평가 결과: [고위험 영역 목록 및 근거] 기재.<br/><br/>고위험 영역은 확대 테스트(샘플 규모 25건 이상) 적용.</td></tr>
    <tr><td><strong>중요성 수준</strong></td><td>[정량적 또는 정성적 중요성 기준 기재]</td></tr>
    <tr><td><strong>작성자</strong></td><td>[성명] / [날짜]</td></tr>
    <tr><td><strong>검토자</strong></td><td>[성명] / [날짜]</td></tr>
    <tr><td><strong>승인자</strong></td><td>[성명] / [날짜]</td></tr>
  </tbody>
</table>

---

### 양식 2: 통제 테스트 조서 (CTW — Control Test Working Paper)

<table>
  <colgroup>
    <col style={{width: '25%'}} />
    <col style={{width: '75%'}} />
  </colgroup>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>조서 번호</strong></td><td>[프로젝트코드]-CTW-[번호] (예: ITGC2025-CTW-AM01)</td></tr>
    <tr><td><strong>통제 ID</strong></td><td>[RCM 상의 통제 ID] (예: AM-01)</td></tr>
    <tr><td><strong>테스트 목적</strong></td><td>[통제 활동명]이 감사 대상 기간 동안 효과적으로 운영되고 있는지 검증한다.</td></tr>
    <tr><td><strong>테스트 대상 기간</strong></td><td>[YYYY-MM-DD ~ YYYY-MM-DD]</td></tr>
    <tr><td><strong>모집단 규모</strong></td><td>[전체 건수] 건 — 시스템 추출 쿼리 또는 보고서 기준 (증적: 첨부 1)</td></tr>
    <tr><td><strong>샘플 선정 방법</strong></td><td>랜덤 샘플링 / 위험 기반 샘플링 (선택 기재); 샘플 규모: [N]건</td></tr>
    <tr><td><strong>수행 절차</strong></td><td>1. [시스템명]에서 [기간] 해당 [데이터] 전수 추출<br/><br/>2. 랜덤 샘플링 도구를 활용하여 [N]건 선정<br/><br/>3. 각 샘플에 대해 [확인 항목] 검증<br/><br/>4. 예외 항목 식별 및 추가 질의 수행</td></tr>
    <tr><td><strong>테스트 결과 요약</strong></td><td>- 총 샘플: [N]건<br/><br/>- 예외 없음: [N]건<br/><br/>- 예외 발생: [N]건 (예외 내용: [설명])</td></tr>
    <tr><td><strong>결론</strong></td><td>[효과적 / 비효과적 / 제한적 효과적]<br/><br/>(예외 [N]건 발견. 예외는 [중요성 평가]. [후속 조치 여부].)</td></tr>
    <tr><td><strong>첨부 증적 목록</strong></td><td>- 첨부 1: 모집단 추출 화면 (EV-AM01-001)<br/><br/>- 첨부 2: 샘플 목록 (EV-AM01-002)<br/><br/>- 첨부 3: 승인 기록 화면 (EV-AM01-003)</td></tr>
    <tr><td><strong>작성자</strong></td><td>[성명] / [날짜]</td></tr>
    <tr><td><strong>검토자</strong></td><td>[성명] / [날짜]</td></tr>
  </tbody>
</table>

---

### 양식 3: 인터뷰 기록지 (IR — Interview Record)

<table>
  <colgroup>
    <col style={{width: '25%'}} />
    <col style={{width: '75%'}} />
  </colgroup>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>조서 번호</strong></td><td>[프로젝트코드]-IR-[번호] (예: ITGC2025-IR-001)</td></tr>
    <tr><td><strong>인터뷰이(Interviewee)</strong></td><td>[성명] / [직급] / [부서]</td></tr>
    <tr><td><strong>인터뷰어(Interviewer)</strong></td><td>[감사인 성명] / [직급]</td></tr>
    <tr><td><strong>일시</strong></td><td>[YYYY-MM-DD HH:MM ~ HH:MM]</td></tr>
    <tr><td><strong>장소 / 방식</strong></td><td>[장소 또는 화상회의 플랫폼명]</td></tr>
    <tr><td><strong>인터뷰 목적</strong></td><td>[접근 관리 통제 절차 이해 / 예외 사항 확인 등]</td></tr>
    <tr><td><strong>질문 항목 및 답변 요약</strong></td><td>Q1: [질문 내용]<br/><br/>A1: [답변 요약]<br/><br/><br/><br/>Q2: [질문 내용]<br/><br/>A2: [답변 요약]<br/><br/><br/><br/>Q3: [질문 내용]<br/><br/>A3: [답변 요약]</td></tr>
    <tr><td><strong>후속 조치 필요 항목</strong></td><td>- [추가 자료 요청 항목 및 담당자]<br/><br/>- [추가 확인이 필요한 사항]</td></tr>
    <tr><td><strong>인터뷰이 확인</strong></td><td>위 내용이 인터뷰 내용과 일치함을 확인합니다. [서명] / [날짜]</td></tr>
    <tr><td><strong>작성자</strong></td><td>[성명] / [날짜]</td></tr>
    <tr><td><strong>검토자</strong></td><td>[성명] / [날짜]</td></tr>
  </tbody>
</table>

---

### 양식 4: 감사 지적사항 양식 (FF — Finding Form)

<table>
  <colgroup>
    <col style={{width: '25%'}} />
    <col style={{width: '75%'}} />
  </colgroup>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>지적사항 ID</strong></td><td>[프로젝트코드]-FF-[번호] (예: ITGC2025-FF-001)</td></tr>
    <tr><td><strong>지적사항 제목</strong></td><td>[간결하고 명확한 제목] (예: "퇴직자 계정 비활성화 지연")</td></tr>
    <tr><td><strong>위험 등급</strong></td><td>Critical / High / Medium / Low</td></tr>
    <tr><td><strong>관련 통제 ID</strong></td><td>[RCM 통제 ID] (예: AM-02)</td></tr>
    <tr><td><strong>조건 (Condition)</strong></td><td>감사 수행 결과 발견된 현재 상태를 객관적 사실로 기술합니다.<br/><br/>예: "감사기간 중 퇴직자 25건 샘플 중 4건(16%)에서 퇴직일 후 평균 8.5일이 경과한 후 계정이 비활성화되었음이 확인되었다."</td></tr>
    <tr><td><strong>기준 (Criteria)</strong></td><td>통제가 준수해야 하는 정책, 표준, 법규 등을 기술합니다.<br/><br/>예: "회사 정보보안 정책 제12조에 따르면 퇴직 처리 당일 해당 직원의 모든 시스템 계정은 즉시 비활성화되어야 한다."</td></tr>
    <tr><td><strong>원인 (Cause)</strong></td><td>조건과 기준 사이의 격차가 발생한 근본 원인을 기술합니다.<br/><br/>예: "HR 시스템과 IAM 시스템 간 자동 연동이 구성되지 않아, 퇴직 처리 후 IT 팀에 수동으로 통보하는 프로세스에 의존하고 있으며, 이 과정에서 지연이 발생하고 있다."</td></tr>
    <tr><td><strong>영향 (Impact)</strong></td><td>통제 미비가 초래할 수 있는 실질적 위험 및 잠재적 손해를 기술합니다.<br/><br/>예: "퇴직 직원이 퇴직 후에도 수일간 시스템에 접근 가능한 상태가 유지되어, 데이터 유출, 무단 거래 처리 등 중대한 보안 사고가 발생할 수 있다."</td></tr>
    <tr><td><strong>권고사항 (Recommendation)</strong></td><td>1. HR 시스템과 IAM 시스템 간 자동 연동(API 또는 SCIM 프로토콜)을 구현하여 퇴직 처리 시 자동으로 계정이 비활성화되도록 할 것<br/><br/>2. 자동 연동 구현 전까지는 퇴직 처리 당일 HR 담당자가 IT 팀에 즉시 통보하는 절차를 의무화하고, 이행 현황을 일별로 모니터링할 것<br/><br/>3. 잔존 계정에 대한 전수 점검을 실시하고 즉시 조치할 것</td></tr>
    <tr><td><strong>Management Response</strong></td><td>[피감사 부서 의견 및 이행 계획 기재]<br/><br/>예: "동의함. IAM-HR 연동 개발은 YYYY-QQ까지 완료 예정이며, 중간 기간 동안 수동 통보 절차를 강화하겠음."<br/><br/>담당자: [성명] / [날짜]</td></tr>
    <tr><td><strong>목표 이행일</strong></td><td>[YYYY-MM-DD]</td></tr>
    <tr><td><strong>작성자</strong></td><td>[성명] / [날짜]</td></tr>
    <tr><td><strong>검토자</strong></td><td>[성명] / [날짜]</td></tr>
  </tbody>
</table>

---

### 양식 5: 후속 조치 추적표 (FT — Follow-up Tracking Sheet)

<table>
  <colgroup>
    <col style={{width: '10%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '18%'}} />
    <col style={{width: '12%'}} />
    <col style={{width: '10%'}} />
    <col style={{width: '15%'}} />
    <col style={{width: '15%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>지적사항 ID</th>
      <th>권고사항 요약</th>
      <th>이행 담당자</th>
      <th>목표 이행일</th>
      <th>현황</th>
      <th>검증 방법</th>
      <th>비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ITGC2025-FF-001</td>
      <td>HR-IAM 자동 연동 구현 및 잔존 계정 전수 조치</td>
      <td>IT 인프라팀장<br/>[성명]</td>
      <td>2025-09-30</td>
      <td>진행 중<br/>(50%)</td>
      <td>연동 개발 완료 후 재테스트 수행; 비활성화 타임스탬프 자동 로그 확인</td>
      <td>2차 추적 예정: 2025-10-15</td>
    </tr>
    <tr>
      <td>ITGC2025-FF-002</td>
      <td>긴급 변경 사후 검토 절차 문서화 및 시행</td>
      <td>IT 운영팀장<br/>[성명]</td>
      <td>2025-07-31</td>
      <td>완료</td>
      <td>개정된 긴급 변경 절차서 확인; 변경 후 1개월간 CAB 사후 검토 기록 전수 확인</td>
      <td>완료 검증일: 2025-08-05</td>
    </tr>
    <tr>
      <td>ITGC2025-FF-003</td>
      <td>분기별 접근 권한 검토 절차 표준화 및 증적 보관</td>
      <td>정보보안팀장<br/>[성명]</td>
      <td>2025-06-30</td>
      <td>완료</td>
      <td>표준 검토 양식 및 서명 기록 확인; 2025 Q2 검토 완료 기록 전수 확인</td>
      <td>완료 검증일: 2025-07-10</td>
    </tr>
    <tr>
      <td>ITGC2025-FF-004</td>
      <td>취약점 패치 SLA 임계치 설정 및 모니터링 체계 구축</td>
      <td>보안운영팀장<br/>[성명]</td>
      <td>2025-10-31</td>
      <td>미착수</td>
      <td>패치 관리 도구 SLA 설정 화면 및 3개월 SLA 준수율 보고서 확인</td>
      <td>1차 추적: 2025-08-15</td>
    </tr>
  </tbody>
</table>

---

## 5. 관련 표준 및 참고

| 표준/프레임워크 | 관련 영역 | 참고 섹션 |
|----------------|-----------|-----------|
| ISACA ITAF 3rd Edition | 감사 조서 작성 및 관리 기준 | Standard 1201, 1203, 1205 |
| IIA IPPF 2330 | 내부감사 조서 문서화 기준 | Standard 2330 |
| ISO 19011:2018 | 감사 증거 및 기록 관리 | Section 6.6, 6.7 |
| PCAOB AS 1215 | 외부 감사 조서 보존 | AS 1215 |

---

## 관련 문서

- [6.1 RCM 라이브러리](./rcm)
- [6.3 상시 모니터링 대시보드](./monitoring-dashboard)
- [감사 보고서 작성 기준](/docs/audit-process/reporting)
