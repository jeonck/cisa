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

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🔐 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/audit-process/intro">
            시작하기 — 도메인 1: 감사 방법론
          </Link>
        </div>
      </div>
    </header>
  );
}

function DomainCards() {
  return (
    <section style={{padding: '2rem 0'}}>
      <div className="container">
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

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <DomainCards />
      </main>
    </Layout>
  );
}
