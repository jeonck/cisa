# CISA 지식베이스 콘텐츠 작성 가이드

## Mermaid 다이어그램 규칙

### 1. 줄 바꿈은 `<br/>` 사용 (절대 `\n` 금지)
```
❌ A["IAM\n접근 관리"]
✅ A["IAM<br/>접근 관리"]
```

### 2. subgraph 라벨에 이모지 금지
```
❌ subgraph GOV["🏛️ 거버넌스"]
✅ subgraph GOV["거버넌스"]
```

### 3. 모든 노드·화살표 라벨은 `""` 로 감싸기
```
✅ A["한글 라벨"] -->|"화살표"| B["결과"]
```

### 4. `&` 체인 화살표는 각 줄로 분리
```
❌ COBIT --> STR & OPS & CUL
✅ COBIT --> STR
   COBIT --> OPS
   COBIT --> CUL
```

### 권장 색상 팔레트
- 파랑: `fill:#2563EB,stroke:#1D4ED8,color:#fff`
- 보라: `fill:#7C3AED,stroke:#6D28D9,color:#fff`
- 주황: `fill:#EA580C,stroke:#C2410C,color:#fff`
- 청록: `fill:#0891B2,stroke:#0E7490,color:#fff`
- 녹색: `fill:#16A34A,stroke:#15803D,color:#fff`
- 네이비: `fill:#1E3A5F,stroke:#1E3A5F,color:#fff`

---

## 볼드 텍스트 규칙

### 1. 따옴표는 볼드 마커 밖으로
```
❌ **"볼드 안 따옴표"**
✅ "**볼드 밖 따옴표**"
```

### 2. 특수문자 포함 긴 문자열은 단어별 볼드
```
❌ **거버넌스·관리·위험(EGIT)**
✅ **거버넌스**·**관리**·**위험**(EGIT)
```

---

## 상호 참조 태그 형식

각 문서 작성 시 하단에 참조 태그를 추가합니다:

```
:::info 관련 표준
CISA Domain X.X / ISO 27001 Control X.X / NIST SP 800-XXX
:::
```

---

## 문서 frontmatter 형식

```yaml
---
sidebar_position: N
title: X.X 한글 제목
---
```
