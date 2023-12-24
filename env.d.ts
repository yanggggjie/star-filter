declare global {
  namespace NodeJS {
    interface ProcessEnv {
    readonly CLIENT_SECRET: string;
readonly VITE_CLIENT_ID: string;
     // 其他环境变量...
    }
  }
}
