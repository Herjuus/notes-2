import { useRouter } from 'next/navigation';
import { writeTextFile, BaseDirectory, readTextFile, exists } from '@tauri-apps/api/fs';

export type Config = {
    note_path: string
}

export async function createConfig(config: Config) {
    await writeTextFile('App.conf', JSON.stringify(config), { dir: BaseDirectory.AppConfig });
    const config_file = await loadConfig();
    return config_file;
}

export async function loadConfig() {
    const config_string = await readTextFile('App.conf', { dir: BaseDirectory.AppConfig });
    const config: Config = JSON.parse(config_string) as Config;
    if (!config.note_path) {
        return null;
    }
    return config;
}

export async function saveConfig(path: string) {
    if (path == "") {
      return null;
    }

    if (!await validatePath(path)) {
        return null
    }

    const config: Config = {
      note_path: path,
    }

    const config_file = createConfig(config)
    return config_file;
}

export async function validatePath(path: string) {
    const validated = await exists(path);
    return validated;
}