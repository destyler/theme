declare module 'virtual:starlight-theme-destyler-config' {
  const StarlightThemeDestylerConfig: import('./libs/config').StarlightThemeDestylerConfig

  export default StarlightThemeDestylerConfig
}

declare module 'virtual:starlight/user-config' {
  const Config: import('@astrojs/starlight/types').StarlightConfig
  export default Config
}

declare module 'virtual:starlight/user-images' {
  type ImageMetadata = import('astro').ImageMetadata
  export const logos: {
    dark?: ImageMetadata
    light?: ImageMetadata
  }
}

declare module 'virtual:starlight/pagefind-config' {
  export const pagefindUserConfig: Partial<
    Extract<import('@astrojs/starlight/types').StarlightConfig['pagefind'], object>
  >
}

declare module 'virtual:user-component:Sidebar' {
  import type { AstroComponentFactory } from 'astro'

  const Sidebar: AstroComponentFactory
  export default Sidebar
}

declare module 'virtual:user-component:TOCExtra' {
  import type { AstroComponentFactory } from 'astro'

  const TOCExtra: AstroComponentFactory
  export default TOCExtra
}
