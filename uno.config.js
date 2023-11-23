// uno.config.js
import {
  defineConfig,
  presetAttributify,
  presetMini,
} from "unocss";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
export default defineConfig({
  presets: [
    presetAttributify(),
    presetMini(),
    presetIcons({
      /* options */
    }),
  ],
  variants: [
    // hover:
    (matcher) => {
      if (!matcher.startsWith('hover:'))
        return matcher
      return {
        // 去掉前缀并将其传递给下一个变体和规则
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      }
    }
  ],
  transformers: [transformerDirectives()],
  rules: [
  ],
  shortcuts: {
    'b-A': 'border-1px border-solid border-red',
    'b-B': 'border-1px border-solid border-blue',
    'b-C': 'border-1px border-solid border-pink'
  }
});
