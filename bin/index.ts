#!/usr/bin/env node

import { program } from 'commander';
import { compile, watch } from '../src/compiler';
import { version } from '../package.json';

program
    .name('prompt-scribe')
    .description('Compiles .md prompt files to .ts files.')
    .version(version);

program
    .argument('[glob]', 'glob pattern for the markdown files', '**/prompts/*.md')
    .option('-w, --watch', 'Watch files for changes')
    .action((globPattern: string, options: { watch?: boolean }) => {
        if (options.watch) {
            console.log(`Watching for changes in: ${globPattern}`);
            watch(globPattern);
        } else {
            console.log(`Compiling files for: ${globPattern}`);
            compile(globPattern);
        }
    });

program.parse(process.argv);