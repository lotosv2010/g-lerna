const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
const chalk = require('chalk');

class InitCommand {
  constructor(argv) {
    this.argv = argv;
    this.rootPath = path.resolve();
  }
  async execute() {
    await this.ensureLernaConfig();
    await this.ensurePackageJSON();
    await this.ensurePackagesDir();
    await this.ensureGit();
    await this.ensurePnpm();
    console.log(
      `${chalk.bgBlack('lerna')} ${chalk.greenBright('success')} Initialized Lerna files`,
    );
  }
  async ensurePnpm() {
    console.log(
      `${chalk.bgBlack('lerna')} ${chalk.greenBright('info')} Using pnpm to install packages`,
    );
    await execa('pnpm', ['install'], { stdio: 'pipe' });
  }
  async ensureGit() {
    console.log(`${chalk.green('CREATE')} .gitignore`);
    await fs.outputFile(path.join(this.rootPath, '.gitignore'), '');
    console.log(
      `${chalk.bgBlack('lerna')} ${chalk.greenBright('info')} Initializing Git repository`,
    );
    await execa('git', ['init'], { stdio: 'pipe' });
  }
  async ensurePackageJSON() {
    console.log(`${chalk.greenBright('CREATE')} package.json`);
    await fs.writeJson(
      path.join(this.rootPath, 'package.json'),
      {
        name: this.rootPath.split('/').pop(),
        private: true,
        devDependencies: {
          lerna: '^4.0.0',
        },
      },
      { spaces: 2 },
    );
  }
  async ensureLernaConfig() {
    console.log(`${chalk.greenBright('CREATE')} lerna.json`);
    await fs.writeJson(
      path.join(this.rootPath, 'lerna.json'),
      {
        packages: ['packages/*'],
        version: '0.0.0',
      },
      { spaces: 2 },
    );
  }
  async ensurePackagesDir() {
    console.log(`${chalk.greenBright('CREATE')} packages directory`);
    await fs.mkdirp(path.join(this.rootPath, 'packages'));
  }
}
function factory(argv) {
  new InitCommand(argv).execute();
}
module.exports = factory;
