
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DB_USER: string;
	export const DB_PASS: string;
	export const DB_HOST: string;
	export const DB_NAME: string;
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const COLORTERM: string;
	export const PYENV_SHELL: string;
	export const XDG_CONFIG_DIRS: string;
	export const LESS: string;
	export const NVM_INC: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const JDK_HOME: string;
	export const CONFIG_PROTECT_MASK: string;
	export const VSCODE_INSPECTOR_OPTIONS: string;
	export const HISTSIZE: string;
	export const NODE_OPTIONS: string;
	export const JAVA_HOME: string;
	export const SSH_AUTH_SOCK: string;
	export const HISTTIMEFORMAT: string;
	export const TERMINATOR_UUID: string;
	export const DESKTOP_SESSION: string;
	export const SSH_AGENT_PID: string;
	export const NO_AT_BRIDGE: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const CONFIG_PROTECT: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const PORT: string;
	export const MANPATH: string;
	export const _: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const __VERCEL_DEV_RUNNING: string;
	export const WINDOWPATH: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LANG: string;
	export const HISTFILE: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const VTE_VERSION: string;
	export const FORCE_COLOR: string;
	export const GIT_ASKPASS: string;
	export const NOW_REGION: string;
	export const CHROME_DESKTOP: string;
	export const INFOPATH: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const JAVAC: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const MANPAGER: string;
	export const DISPLAY: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const PAGER: string;
	export const LEX: string;
	export const XDG_VTNR: string;
	export const IGNOREEOF: string;
	export const XDG_SESSION_ID: string;
	export const XDG_RUNTIME_DIR: string;
	export const GCC_SPECS: string;
	export const GSETTINGS_BACKEND: string;
	export const PYENV_ROOT: string;
	export const BUN_INSTALL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const HUSHLOGIN: string;
	export const BROWSER: string;
	export const PATH: string;
	export const __avn_active_file: string;
	export const HISTFILESIZE: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const MAIL: string;
	export const NVM_BIN: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_API_KEY: string;
	export const PUBLIC_AUTH_DOMAIN: string;
	export const PUBLIC_PROJECT_ID: string;
	export const PUBLIC_STORAGE_BUCKET: string;
	export const PUBLIC_MESSAGING_SENDER_ID: string;
	export const PUBLIC_APP_ID: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DB_USER: string;
		DB_PASS: string;
		DB_HOST: string;
		DB_NAME: string;
		SHELL: string;
		SESSION_MANAGER: string;
		COLORTERM: string;
		PYENV_SHELL: string;
		XDG_CONFIG_DIRS: string;
		LESS: string;
		NVM_INC: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		JDK_HOME: string;
		CONFIG_PROTECT_MASK: string;
		VSCODE_INSPECTOR_OPTIONS: string;
		HISTSIZE: string;
		NODE_OPTIONS: string;
		JAVA_HOME: string;
		SSH_AUTH_SOCK: string;
		HISTTIMEFORMAT: string;
		TERMINATOR_UUID: string;
		DESKTOP_SESSION: string;
		SSH_AGENT_PID: string;
		NO_AT_BRIDGE: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		CONFIG_PROTECT: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		PORT: string;
		MANPATH: string;
		_: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		__VERCEL_DEV_RUNNING: string;
		WINDOWPATH: string;
		MOTD_SHOWN: string;
		HOME: string;
		LANG: string;
		HISTFILE: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		VTE_VERSION: string;
		FORCE_COLOR: string;
		GIT_ASKPASS: string;
		NOW_REGION: string;
		CHROME_DESKTOP: string;
		INFOPATH: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		JAVAC: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LESSOPEN: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		MANPAGER: string;
		DISPLAY: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		PAGER: string;
		LEX: string;
		XDG_VTNR: string;
		IGNOREEOF: string;
		XDG_SESSION_ID: string;
		XDG_RUNTIME_DIR: string;
		GCC_SPECS: string;
		GSETTINGS_BACKEND: string;
		PYENV_ROOT: string;
		BUN_INSTALL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		HUSHLOGIN: string;
		BROWSER: string;
		PATH: string;
		__avn_active_file: string;
		HISTFILESIZE: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		MAIL: string;
		NVM_BIN: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_API_KEY: string;
		PUBLIC_AUTH_DOMAIN: string;
		PUBLIC_PROJECT_ID: string;
		PUBLIC_STORAGE_BUCKET: string;
		PUBLIC_MESSAGING_SENDER_ID: string;
		PUBLIC_APP_ID: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
