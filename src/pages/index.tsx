import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const DOMAINS = [
  {
    num: '01',
    title: '감사 프로세스 및 방법론',
    subtitle: 'IS Auditing Process',
    desc: '감사 헌장·표준, 리스크 기반 계획, 증거 수집, CAATs, 보고 및 후속 조치',
    to: '/docs/audit-process/intro',
    color: '#2563EB',
  },
  {
    num: '02',
    title: 'IT 거버넌스 및 위험 관리',
    subtitle: 'Governance & Management of IT',
    desc: 'IT 전략, COBIT/NIST/ISO 프레임워크, 컴플라이언스, 데이터 거버넌스',
    to: '/docs/it-governance/intro',
    color: '#7C3AED',
  },
  {
    num: '03',
    title: '시스템 취득, 개발 및 구현',
    subtitle: 'IS Acquisition & Development',
    desc: '프로젝트 거버넌스, SDLC·DevSecOps, 형상 관리, 사후 검토',
    to: '/docs/system-development/intro',
    color: '#EA580C',
  },
  {
    num: '04',
    title: 'IT 운영 및 비즈니스 탄력성',
    subtitle: 'IS Operations & Resilience',
    desc: 'ITAM·CMDB, ITSM·SLA, 패치·변경 관리, BCP/DRP',
    to: '/docs/it-operations/intro',
    color: '#0891B2',
  },
  {
    num: '05',
    title: '정보 자산 보호 및 보안',
    subtitle: 'Protection of Information Assets',
    desc: 'IAM, 인프라 하드닝, 클라우드 보안, 암호화·PKI, 침해사고 대응',
    to: '/docs/information-security/intro',
    color: '#16A34A',
  },
  {
    num: '06',
    title: '실무 툴킷',
    subtitle: 'Audit Toolkits',
    desc: 'RCM 라이브러리, 감사 조서 템플릿, 상시 모니터링 대시보드',
    to: '/docs/audit-toolkits/intro',
    color: '#1E3A5F',
  },
];

const USE_CASES = [
  {
    icon: '🎯',
    title: 'CISA 시험 준비',
    desc: '5대 도메인 핵심 개념과 감사 절차를 체계적으로 학습. 각 문서의 감사 체크리스트가 시험 출제 포인트와 직결.',
    color: '#2563EB',
  },
  {
    icon: '🔍',
    title: '현장 감사 즉시 활용',
    desc: '감사 착수 전 해당 도메인 문서를 펼치면 통제 목적·감사 절차·필수 증적이 바로 나옴. 위험 통제 매트릭스(RCM) 샘플 즉시 사용 가능.',
    color: '#7C3AED',
  },
  {
    icon: '📋',
    title: '컴플라이언스 대응',
    desc: 'SOX·GDPR·ISO 27001 등 규제 감사 시 통제 매핑 기준으로 활용. 각 문서마다 관련 표준 참조 태그 포함.',
    color: '#EA580C',
  },
  {
    icon: '🏢',
    title: '내부 감사팀 온보딩',
    desc: '신규 감사인이 도메인별 Best Practice를 빠르게 습득. 감사 조서 표준 양식(Domain 6)으로 즉시 실무 투입 가능.',
    color: '#0891B2',
  },
  {
    icon: '🛡️',
    title: 'IT 보안 위험 관리',
    desc: 'IAM·클라우드·암호화·침해사고 대응 통제 기준을 정책 수립 참고자료로 활용. Zero Trust·DevSecOps 실무 가이드 포함.',
    color: '#16A34A',
  },
  {
    icon: '📊',
    title: '경영진·이사회 보고',
    desc: 'KRI 모니터링 대시보드 설계 가이드로 IT 위험 현황을 경영진에게 시각화. BCP/DRP Tier 분류 기준으로 투자 우선순위 결정 지원.',
    color: '#1E3A5F',
  },
];

// 학습/활용 흐름 데이터
const FLOW_PATHS = [
  {
    id: 'exam',
    label: 'CISA 시험 준비 경로',
    color: '#2563EB',
    steps: [
      { num: '①', text: 'Domain 1\n감사 방법론 기초', sub: '헌장·표준·계획 이해' },
      { num: '②', text: 'Domain 2\nIT 거버넌스', sub: 'COBIT·NIST·ISO 매핑' },
      { num: '③', text: 'Domain 3–4\n개발·운영 통제', sub: 'SDLC·BCP/DRP 실무' },
      { num: '④', text: 'Domain 5\n보안 통제', sub: 'IAM·암호화·IR' },
      { num: '⑤', text: 'Domain 6\n툴킷 적용', sub: 'RCM·조서 작성 연습' },
    ],
  },
  {
    id: 'audit',
    label: '현장 감사 수행 경로',
    color: '#7C3AED',
    steps: [
      { num: '①', text: '감사 대상 파악', sub: 'Domain 2 거버넌스 확인' },
      { num: '②', text: 'RCM 작성\n(Domain 6)', sub: '위험–통제–테스트 매핑' },
      { num: '③', text: '통제 테스트\n(Domain 1)', sub: '증거 수집·CAATs 활용' },
      { num: '④', text: '기술 영역 검증\n(Domain 3–5)', sub: '해당 도메인 체크리스트' },
      { num: '⑤', text: '보고서 작성\n(Domain 1)', sub: '지적사항 5요소·Follow-up' },
    ],
  },
  {
    id: 'security',
    label: '보안 통제 강화 경로',
    color: '#16A34A',
    steps: [
      { num: '①', text: '거버넌스 기반 수립\n(Domain 2)', sub: '프레임워크 선택·ERM 연계' },
      { num: '②', text: '인프라 보안\n(Domain 5.2)', sub: '심층 방어·Zero Trust' },
      { num: '③', text: '접근 통제\n(Domain 5.1)', sub: 'IAM·PAM·MFA 구현' },
      { num: '④', text: '운영 연속성\n(Domain 4)', sub: '패치·BCP/DRP 체계' },
      { num: '⑤', text: '침해사고 대응\n(Domain 5.5)', sub: 'SIEM·IR 플레이북' },
    ],
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🔐 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{maxWidth: '640px', margin: '0 auto 1.5rem', opacity: 0.9, lineHeight: 1.7}}>
          ISACA CISA 5대 도메인을 기반으로 구성된 실무 중심 지식베이스입니다.
          감사 헌장부터 디지털 포렌식까지, 즉시 현장에서 활용할 수 있는
          Best Practice 가이드라인·감사 체크리스트·RCM 샘플을 제공합니다.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/audit-process/intro"
            style={{marginRight: '1rem'}}>
            시작하기 — 도메인 1: 감사 방법론
          </Link>
          <Link className="button button--outline button--lg"
            style={{borderColor: 'rgba(255,255,255,0.7)', color: '#fff'}}
            to="/docs/audit-toolkits/rcm">
            RCM 샘플 바로보기
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  const stats = [
    { num: '6', label: '대분류 도메인' },
    { num: '25', label: '실무 문서' },
    { num: '100+', label: '감사 체크리스트 항목' },
    { num: '50+', label: 'Mermaid 다이어그램' },
  ];
  return (
    <div style={{background: '#1E3A5F', padding: '1.25rem 0'}}>
      <div className="container">
        <div className="row" style={{textAlign: 'center'}}>
          {stats.map(s => (
            <div key={s.label} className="col col--3">
              <div style={{color: '#fff'}}>
                <span style={{fontSize: '2rem', fontWeight: 800, color: '#60A5FA'}}>{s.num}</span>
                <div style={{fontSize: '0.8rem', opacity: 0.8, marginTop: '0.1rem'}}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UseCases() {
  return (
    <section style={{padding: '3rem 0', background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h2 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>이런 분들께 바로 도움이 됩니다</h2>
          <p style={{color: 'var(--ifm-color-emphasis-600)', maxWidth: '540px', margin: '0 auto'}}>
            CISA 수험생부터 현직 감사인·보안 담당자까지, 목적에 맞는 경로로 활용하세요.
          </p>
        </div>
        <div className="row">
          {USE_CASES.map(uc => (
            <div key={uc.title} className="col col--4" style={{marginBottom: '1.25rem'}}>
              <div className="card shadow--sm" style={{height: '100%', borderLeft: `4px solid ${uc.color}`}}>
                <div className="card__body" style={{padding: '1.25rem'}}>
                  <div style={{fontSize: '1.75rem', marginBottom: '0.5rem'}}>{uc.icon}</div>
                  <h4 style={{marginBottom: '0.4rem', color: uc.color}}>{uc.title}</h4>
                  <p style={{fontSize: '0.85rem', margin: 0, lineHeight: 1.6,
                    color: 'var(--ifm-color-emphasis-700)'}}>
                    {uc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({step, color, isLast}: {step: typeof FLOW_PATHS[0]['steps'][0]; color: string; isLast: boolean}) {
  return (
    <div style={{display: 'flex', alignItems: 'center', flex: isLast ? '0 0 auto' : 1}}>
      <div style={{
        background: color,
        color: '#fff',
        borderRadius: '8px',
        padding: '0.6rem 0.9rem',
        minWidth: '110px',
        textAlign: 'center',
        flexShrink: 0,
      }}>
        <div style={{fontSize: '1rem', fontWeight: 700}}>{step.num}</div>
        <div style={{fontSize: '0.72rem', fontWeight: 600, lineHeight: 1.3, whiteSpace: 'pre-line'}}>
          {step.text}
        </div>
        <div style={{fontSize: '0.65rem', opacity: 0.85, marginTop: '0.2rem', lineHeight: 1.3}}>
          {step.sub}
        </div>
      </div>
      {!isLast && (
        <div style={{
          flex: 1,
          height: '2px',
          background: `linear-gradient(to right, ${color}, ${color}44)`,
          margin: '0 0.3rem',
          position: 'relative',
          minWidth: '24px',
        }}>
          <div style={{
            position: 'absolute',
            right: '-1px',
            top: '-5px',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: `8px solid ${color}`,
          }} />
        </div>
      )}
    </div>
  );
}

function UsageFlow() {
  return (
    <section style={{padding: '3rem 0', background: 'var(--ifm-background-color)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h2 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>학습 및 활용 흐름</h2>
          <p style={{color: 'var(--ifm-color-emphasis-600)', maxWidth: '540px', margin: '0 auto'}}>
            목적에 따라 최적의 도메인 순서로 진입하세요.
            각 경로는 독립적으로 활용하거나 순환적으로 심화할 수 있습니다.
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          {FLOW_PATHS.map(path => (
            <div key={path.id}
              className="card shadow--sm"
              style={{borderLeft: `5px solid ${path.color}`, padding: '1.25rem 1.5rem'}}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: path.color,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}>
                {path.label}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                overflowX: 'auto',
                paddingBottom: '0.25rem',
                gap: 0,
              }}>
                {path.steps.map((step, idx) => (
                  <FlowStep
                    key={idx}
                    step={step}
                    color={path.color}
                    isLast={idx === path.steps.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 공통 기반 설명 */}
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem 1.5rem',
          background: 'var(--ifm-background-surface-color)',
          borderRadius: '8px',
          border: '1px solid var(--ifm-color-emphasis-200)',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div style={{flex: 1, minWidth: '200px'}}>
            <h4 style={{margin: '0 0 0.4rem', fontSize: '0.9rem', color: '#1E3A5F'}}>
              📌 모든 경로의 공통 기반
            </h4>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: 1.6}}>
              각 문서의 <strong>감사 체크리스트</strong>는 통제 목적·절차·증적을 한 화면에 제공합니다.
              <strong> Domain 6 툴킷</strong>은 어느 경로에서든 즉시 사용 가능한 RCM·조서 양식을 담고 있습니다.
            </p>
          </div>
          <div style={{flex: 1, minWidth: '200px'}}>
            <h4 style={{margin: '0 0 0.4rem', fontSize: '0.9rem', color: '#1E3A5F'}}>
              🔄 심화 순환 학습
            </h4>
            <p style={{margin: 0, fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: 1.6}}>
              각 문서의 <strong>관련 표준</strong> 태그(ISO 27001 / COBIT / NIST)를 따라
              연관 도메인을 횡적으로 연결하면 통합적인 IT 감사 역량을 구축할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainCards() {
  return (
    <section style={{padding: '3rem 0', background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h2 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>6대 도메인 문서</h2>
          <p style={{color: 'var(--ifm-color-emphasis-600)'}}>
            ISACA CISA Job Practice 기반 · 각 도메인별 실무 Best Practice 수록
          </p>
        </div>
        <div className="row">
          {DOMAINS.map(d => (
            <div key={d.num} className="col col--4" style={{marginBottom: '1.5rem'}}>
              <div
                className="card shadow--md"
                style={{height: '100%', borderTop: `4px solid ${d.color}`}}>
                <div className="card__header">
                  <span
                    style={{
                      background: d.color,
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                    }}>
                    Domain {d.num}
                  </span>
                  <h3 style={{marginTop: '0.5rem', marginBottom: '0.25rem'}}>{d.title}</h3>
                  <small style={{color: '#888'}}>{d.subtitle}</small>
                </div>
                <div className="card__body">
                  <p style={{fontSize: '0.875rem'}}>{d.desc}</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--outline button--sm" to={d.to}
                    style={{borderColor: d.color, color: d.color}}>
                    문서 보기 →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StandardsBadges() {
  const standards = [
    'ISACA CISA', 'COBIT 2019', 'ISO/IEC 27001:2022', 'NIST CSF 2.0',
    'NIST AI RMF', 'ISO 42001', 'ISO 22301', 'ITIL v4',
    'PCI-DSS v4.0', 'GDPR', 'SOX', 'MITRE ATT&CK',
  ];
  return (
    <section style={{
      padding: '2rem 0',
      background: 'var(--ifm-background-color)',
      borderTop: '1px solid var(--ifm-color-emphasis-200)',
    }}>
      <div className="container" style={{textAlign: 'center'}}>
        <p style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--ifm-color-emphasis-500)',
          marginBottom: '0.75rem',
        }}>
          수록된 글로벌 표준 · 프레임워크
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem'}}>
          {standards.map(s => (
            <span key={s} style={{
              background: 'var(--ifm-background-surface-color)',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '20px',
              padding: '0.25rem 0.75rem',
              fontSize: '0.78rem',
              color: 'var(--ifm-color-emphasis-700)',
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <StatsBar />
      <main>
        <UseCases />
        <UsageFlow />
        <DomainCards />
        <StandardsBadges />
      </main>
    </Layout>
  );
}
