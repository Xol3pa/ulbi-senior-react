import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  // Создаём копию конфигурации, чтобы не изменять параметр напрямую
  const newConfig = { ...config };

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // Настройка alias и расширений
  newConfig.resolve.modules = [...(newConfig.resolve.modules || []), paths.src];
  newConfig.resolve.extensions = [
    ...(newConfig.resolve.extensions || []),
    '.ts',
    '.tsx',
  ];

  // Обновление правил для SVG
  newConfig.module.rules = (newConfig.module.rules || []).map(
    (rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    },
  );

  // Добавляем правила для SVG и CSS
  newConfig.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  newConfig.module.rules.push(buildCssLoader(true));

  return newConfig;
};
