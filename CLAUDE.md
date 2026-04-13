# CLAUDE.md — dentcare-trencin

## Проект
Сайт стоматологической клиники DentCare Trenčín.
Стек: Next.js 15 App Router, TypeScript, pure CSS (НЕ Tailwind), pnpm.

## Команды
```
pnpm dev
pnpm build
npx tsc --noEmit — ОБЯЗАТЕЛЬНО перед каждым коммитом
```

## Правила

### Стилизация
- Pure CSS с CSS Variables — никакого Tailwind
- Все стили в app/globals.css
- CSS @keyframes для анимаций
- IntersectionObserver для reveal-on-scroll (класс .reveal → .visible)
- При фильтрации: если элементы перерисовываются React, передавать "visible" напрямую вместо rely на observer

### CSS Variables (цветовая схема)
```css
--blue: #2563EB
--blue-dark: #1D4ED8
--teal: #0D9488
--teal-dark: #0F766E
--navy: #0F172A
--bg: #F8FBFF
--bg-alt: #EFF6FF
--white: #FFFFFF
--gray-100: #F1F5F9
--gray-200: #E2E8F0
--gray-300: #CBD5E1
--gray-500: #64748B
--gray-600: #475569
--gray-700: #334155
--gray-800: #1E293B
--shadow: 0 4px 20px rgba(0,0,0,0.08)
--shadow-lg: 0 8px 40px rgba(0,0,0,0.12)
--radius: 16px
--radius-sm: 8px
--transition: all 0.3s ease
```

### TypeScript
- Строгая типизация, никаких any
- Типы в lib/types.ts
- Данные в lib/constants.ts
- Никакого хардкода текстов в компонентах

### Компоненты
- Функциональные компоненты
- 'use client' только где нужен state/effects

### Рабочий процесс
1. Читать нужные файлы перед кодом
2. npx tsc --noEmit перед каждым коммитом
3. Коммит сразу после изменения

### Изображения
- Все фото с Unsplash — бесплатные для коммерческого использования
- Использовать next/image компонент
- Фото в /public/images/ (скачать при необходимости)
- Для MVP: использовать Unsplash URL напрямую через next.config.ts remotePatterns

## Структура
```
app/
├── page.tsx           # главная (собирает секции)
├── layout.tsx         # layout + шрифты + meta
├── globals.css        # все стили + CSS variables + @keyframes
components/
├── sections/
│   ├── Header.tsx
│   ├── TrustBar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyUsSection.tsx
│   ├── TeamSection.tsx
│   ├── PricingSection.tsx
│   ├── BookingSection.tsx
│   ├── ReviewsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
lib/
├── types.ts
├── constants.ts
```
