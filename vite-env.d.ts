/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly CLIENT_SECRET: string
  readonly VITE_CLIENT_ID: string
  // 其他环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
