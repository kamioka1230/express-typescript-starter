import deepAssign from 'deep-assign';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';


const config = {};
const EXTENSIONS = ['.yaml', '.yml'];

{
    load('config');
}

function load(configDir: string) {
    // default config
    const configDefault = loadYaml(configDir, 'default');

    // config by environment
    const configEnv ={};
    if (process.env.NODE_ENV !== undefined) {
        deepAssign(configEnv, loadYaml(configDir, 'env', process.env.NODE_ENV));
    }

    // merge config
    return deepAssign(config, configDefault, configEnv);
}

function loadYaml(...paths: string[]) {
    for (const ext of EXTENSIONS) {
        const filename = path.join(...paths) + ext;
        if (fs.existsSync(filename)) {
            return yaml.load(fs.readFileSync(filename, 'utf-8'));
        }
    }
    return {};
}

export default config;