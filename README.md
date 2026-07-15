<div align="center">

<img src="./public/icon.svg" width="60" alt="Taskify 로고" />

# Taskify

**협업에 관한 모든 건 Taskify로 끝내세요.**

칸반 보드 기반의 일정 관리 · 협업 서비스입니다.

**[🔗 서비스 바로가기](https://taskify-workin-taskify.vercel.app/)**

</div>

## 소개

Taskify는 대시보드를 만들어 팀원을 초대하고, 컬럼과 카드로 업무의 흐름을 관리하는 칸반 보드 서비스입니다. 할 일을 카드로 만들어 담당자와 마감일을 지정하고, 진행 상황에 따라 컬럼 사이로 옮기며, 카드마다 댓글로 소통할 수 있습니다.

5인 팀 프로젝트([2-team-taskify](https://github.com/Useung0830/2-team-taskify))로 시작했고, 이후 [@chaemin58](https://github.com/chaemin58)이 개인적으로 이어받아 성능 개선과 구조 개편을 진행하며 배포까지 완료한 저장소입니다. 자세한 내용은 [기여자](#기여자)를 참고하세요.

## 주요 기능

| 기능       | 설명                                                                |
| ---------- | ------------------------------------------------------------------- |
| 인증       | 이메일 회원가입 · 로그인, 쿠키 기반 세션 유지                       |
| 대시보드   | 대시보드 생성 · 수정 · 삭제, 색상 태그 지정                         |
| 멤버 초대  | 이메일로 팀원 초대, 초대 수락 · 취소, 멤버 관리                     |
| 컬럼       | 업무 단계별 컬럼 추가 · 이름 변경 · 삭제                            |
| 카드       | 할 일 카드 생성 · 수정 · 삭제, 담당자 · 마감일 · 태그 · 이미지 지정 |
| 댓글       | 카드 상세에서 댓글 작성 · 수정 · 삭제                               |
| 마이페이지 | 프로필 이미지 · 닉네임 변경, 비밀번호 변경                          |

## 기술 스택

| 구분       | 사용 기술                            |
| ---------- | ------------------------------------ |
| 프레임워크 | Next.js 16 (App Router), React 19    |
| 언어       | TypeScript                           |
| 스타일링   | Tailwind CSS v4, CVA, tailwind-merge |
| 서버 상태  | TanStack Query v5                    |
| 서버 통신  | Server Actions, fetch 래퍼           |
| 코드 품질  | ESLint, Prettier, Husky, lint-staged |
| 배포       | Vercel                               |

## 시작하기

### 요구 사항

Node.js 20 이상이 필요합니다.

### 설치 및 실행

```bash
git clone https://github.com/chaemin58/Taskify.git
cd Taskify
npm install
```

프로젝트 루트에 `.env.local` 파일을 만들고 API 서버 주소를 설정합니다.

```bash
NEXT_PUBLIC_BASE_URL=<API 서버 주소>
```

개발 서버를 실행한 뒤 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

```bash
npm run dev
```

### 스크립트

| 명령어          | 설명                     |
| --------------- | ------------------------ |
| `npm run dev`   | 개발 서버 실행           |
| `npm run build` | 프로덕션 빌드            |
| `npm run start` | 빌드 결과물 실행         |
| `npm run lint`  | ESLint 검사 및 자동 수정 |

## 프로젝트 구조

```
src/
├── actions/      # Server Actions (인증, 댓글, 대시보드 수정 등)
├── api/          # fetch 래퍼(fetch.ts)와 API 호출 함수(data.ts)
├── app/          # App Router — 페이지, 레이아웃, 라우트 핸들러
├── assets/       # 아이콘, 이미지, 폰트 등 정적 요소
├── components/   # 공통 재사용 UI 컴포넌트
├── constants/    # 상수 집합
├── contexts/     # 컴포넌트 간 공유 상태
├── feature/      # 페이지별 도메인 로직
├── hooks/        # 커스텀 훅
├── lib/          # 외부 라이브러리 설정 및 래퍼
├── providers/    # 전역 프로바이더 (React Query 등)
├── types/        # 전역 타입 정의
├── utils/        # 외부 의존성 없는 순수 함수
└── proxy.ts      # 인증 기반 라우트 접근 제어
```

페이지 전용 컴포넌트는 해당 라우트 폴더 안에 `_components`로 함께 둡니다(co-location). 모달은 App Router의 Parallel Routes(`@modal`)와 Intercepting Routes로 구현되어 있습니다.

자세한 규칙은 [`conventions/`](./conventions) 폴더의 문서를 참고하세요.

- [디렉터리 구조](./conventions/디렉터리%20구조.md)
- [네이밍 규칙](./conventions/네이밍%20규칙.md)
- [코드 스타일](./conventions/코드%20스타일.md)
- [Git 규칙](./conventions/git%20규칙.md)

## 라우트

| 경로                   | 설명                                |
| ---------------------- | ----------------------------------- |
| `/`                    | 랜딩 페이지                         |
| `/login`, `/signup`    | 로그인 · 회원가입                   |
| `/mydashboard`         | 내 대시보드 목록, 초대받은 대시보드 |
| `/dashboard/[id]`      | 칸반 보드                           |
| `/dashboard/[id]/edit` | 대시보드 설정 및 멤버 관리          |
| `/card/[cardId]`       | 카드 상세                           |
| `/mypage`              | 프로필 및 비밀번호 변경             |

로그인하지 않은 사용자는 `/`, `/login`, `/signup` 외의 경로에 접근할 수 없으며, [`src/proxy.ts`](./src/proxy.ts)에서 처리합니다.

## 성능 개선

팀 프로젝트를 이어받은 뒤 진행한 주요 개선 작업입니다.

### 대시보드 페이지 서버 컴포넌트 전환

대시보드 페이지 전체가 클라이언트 컴포넌트라 초기 데이터를 브라우저에서 받아온 뒤에야 화면이 그려졌습니다. 페이지를 서버 컴포넌트로 전환하고, 상호작용이 필요한 부분만 클라이언트 컴포넌트로 분리했습니다. 초기 데이터가 서버에서 렌더링된 HTML에 담겨 내려오면서 클라이언트 번들도 함께 줄었습니다.

### 카드 조회 직렬 → 병렬화

카드 목록을 Server Actions로 조회하고 있었는데, Server Actions는 요청이 직렬로 처리되어 컬럼이 늘어날수록 대기 시간이 그만큼 누적됐습니다. 조회 경로를 Route Handler([`/api/cards`](./src/app/api/cards/route.ts))로 옮겨 컬럼별 요청이 병렬로 나가도록 바꿨습니다. 조회는 Route Handler로, 변경 작업은 Server Actions로 역할을 나눈 구조입니다.

### 멤버 목록 폴링 비용 절감

멤버 목록을 5초마다 무조건 폴링해 사용자가 보고 있지 않은 탭에서도 요청이 계속 나갔습니다. 폴링 주기를 1분으로 늘리고, `refetchIntervalInBackground: false`로 백그라운드 탭에서는 폴링을 멈추도록 했습니다. 대신 `refetchOnWindowFocus`로 탭에 돌아오는 시점에 즉시 최신화해 체감 최신성은 유지했습니다.

### 정적 자산 리다이렉트 수정

인증 미들웨어([`src/proxy.ts`](./src/proxy.ts))의 matcher가 `favicon.ico`만 예외 처리하고 있어, `icon.svg`와 OG 이미지 요청까지 `/login`으로 리다이렉트되고 있었습니다. 파비콘이 표시되지 않고 링크 미리보기 이미지도 깨지던 문제로, matcher에서 정적 이미지 확장자 전체를 제외하도록 수정했습니다.

## 개발 규칙

팀 프로젝트 시절 정한 규칙을 개인 작업에서도 그대로 따르고 있습니다.

- 브랜치 전략은 `main` → `develop` → `feature`로 구성됩니다.
- 기능 브랜치는 `develop`에서 분기하고, 작업 후 `develop`으로 Merge Commit 합니다.
- `develop`에서 `main`으로는 Squash and Merge 합니다.
- 커밋 메시지는 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 머릿말을 사용합니다.
- PR 제목은 `Type (Scope): Summary of changes` 형식으로 작성합니다.

`main`으로 향하는 PR은 GitHub Actions에서 Lint와 Build 검사를 수행하며, Gemini 기반 AI 코드 리뷰가 함께 동작합니다.

## 기여자

초기 기능 구현은 [@chaemin58](https://github.com/chaemin58) 외 4명이 팀 프로젝트로 함께 진행했습니다. 당시 저장소는 [Useung0830/2-team-taskify](https://github.com/Useung0830/2-team-taskify)이며, 팀원별 기여 내역은 커밋 이력에서 확인할 수 있습니다.

이 저장소는 팀 프로젝트 종료 후 [@chaemin58](https://github.com/chaemin58)이 이어받아 단독으로 개발 · 운영하고 있습니다. [성능 개선](#성능-개선) 항목을 비롯한 이후의 모든 작업이 여기에 해당합니다.
