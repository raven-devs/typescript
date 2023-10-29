interface BaseConfig {
  config: string;

  constructor(config: string): { config: string };
}

class Config implements BaseConfig {
  config = '';

  constructor(config: string) {
    this.config = config;
  }
}

function main() {
  const config = new Config('some config');
}

main();

export {};
