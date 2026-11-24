// eslint-disable-next-line import/no-extraneous-dependencies
import type { Tree } from '@nx/devkit';

import autoExportGenerator from '../auto-export/generator';
import polyfillGenerator from '../polyfill-generator/generator';

interface CheckoutGeneratedFilesOptions {
    projectName: string;
}

export default async function checkoutGeneratedFiles(
    tree: Tree,
    { projectName }: CheckoutGeneratedFilesOptions,
) {
    await autoExportGenerator(tree, { config: './auto-export.config.json', projectName });
    polyfillGenerator(tree, { browserslistQuery: 'defaults', projectName });
}
