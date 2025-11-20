import { Injectable } from '@angular/core';

export interface UserConfig {
  lang?: string;
  configured?: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserConfigService {
  private readonly key = 'kc_user_config';

  constructor() {}

  getConfig(): UserConfig {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? (JSON.parse(raw) as UserConfig) : {};
    } catch (e) {
      return {};
    }
  }

  setConfig(cfg: UserConfig): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(cfg));
    } catch (e) {
      // ignore
    }
  }

  isConfigured(): boolean {
    const c = this.getConfig();
    return !!c.configured;
  }

  getLanguage(): string | null {
    const c = this.getConfig();
    return c.lang || null;
  }

  setLanguage(lang: string): void {
    const c = this.getConfig();
    c.lang = lang;
    c.configured = true;
    this.setConfig(c);
  }
}
