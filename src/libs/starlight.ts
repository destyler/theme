import type { StarlightPlugin } from '@astrojs/starlight/types'
import type { AstroIntegrationLogger } from 'astro'

export function overrideComponents(
  starlightConfig: StarlightUserConfig,
  overrides: ComponentOverride[],
  logger: AstroIntegrationLogger,
): StarlightUserConfig['components'] {
  const components = { ...starlightConfig.components }
  for (const override of overrides) {
    const name = typeof override === 'string' ? override : (override as any).name

    if ((starlightConfig.components?.[name]) != null) {
      const fallback = `starlight-theme-destyler/${typeof override === 'string' ? 'overrides' : 'components'}/${typeof override === 'string' ? override : (override as any).fallback}.astro`

      logger.warn(`A \`<${name}>\` component override is already defined in your Starlight configuration.`)
      logger.warn(
        `To use \`starlight-theme-destyler\`, either remove this override or manually render the content from \`${fallback}\`.`,
      )
      continue
    }
    components[name] = `starlight-theme-destyler/overrides/${name}.astro`
  }

  return components
}

type StarlightUserConfig = any // Parameters<StarlightPlugin['hooks']['config:setup']>['0']['config']

type ComponentOverride =
  | keyof NonNullable<StarlightUserConfig['components']>
  | {
    name: keyof NonNullable<StarlightUserConfig['components']>
    fallback: string
  }
