declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRE: string;
    REFRESH_TOKEN_EXPIRE: string;
  }
}