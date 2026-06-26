// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/** Base público: domínio customizado na raiz -> `/`; só use subpath em `*.github.io/<repo>/`. */
function viteBaseFromEnv(): string {
  const raw = (process.env.VITE_BASE_PATH ?? "").trim();
  if (!raw || raw === "/") return "/";
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

/** Caminho do router sem barra final (ex.: `/repo`); vazio em dev na raiz. */
function routerBasepathFromEnv(): string | undefined {
  const b = viteBaseFromEnv();
  if (b === "/") return undefined;
  return b.replace(/\/+$/, "") || undefined;
}

export default defineConfig({
  // Site estático para GitHub Pages: HTML em dist/client; sem worker/server Nitro no artefato.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: { enabled: true },
    router: routerBasepathFromEnv()
      ? { basepath: routerBasepathFromEnv() as string }
      : {},
  },
  vite: {
    base: viteBaseFromEnv(),
  },
});
