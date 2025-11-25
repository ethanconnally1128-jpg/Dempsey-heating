/**
 * Type definitions for environment variables.
 * Note: vite/client reference removed due to resolution issues in current environment.
 */

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY?: string;
    [key: string]: string | undefined;
  }
}
