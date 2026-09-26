---
name: Fidelity Modern
colors:
  surface: '#f9f9ff'
  surface-dim: '#d7dae3'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3fc'
  surface-container: '#ebedf7'
  surface-container-high: '#e6e8f1'
  surface-container-highest: '#e0e2eb'
  on-surface: '#181c22'
  on-surface-variant: '#414753'
  inverse-surface: '#2d3037'
  inverse-on-surface: '#eef0fa'
  outline: '#717785'
  outline-variant: '#c1c6d5'
  surface-tint: '#005db8'
  primary: '#005ab4'
  on-primary: '#ffffff'
  primary-container: '#0a73e0'
  on-primary-container: '#fefcff'
  inverse-primary: '#aac7ff'
  secondary: '#465f88'
  on-secondary: '#ffffff'
  secondary-container: '#b6d0ff'
  on-secondary-container: '#3f5881'
  tertiary: '#964400'
  on-tertiary: '#ffffff'
  tertiary-container: '#bd5700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458d'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aec7f7'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#2d476f'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68c'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#763400'
  background: '#f9f9ff'
  on-background: '#181c22'
  surface-variant: '#e0e2eb'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
---

# Design System: Fidelity Modern

## Brand & Style
Fidelity Modern is a clean, reliable, and professional design system tailored for modern digital applications. It combines a structured corporate sensibility with contemporary minimalist clarity, ensuring high readability, predictable interaction patterns, and a trustworthy user experience. The visual language favors strong utility, high-contrast clarity, and an accessible layout structure built using the **Inter** font family.

## Colors
The color palette is anchored by a reliable, vibrant primary blue (`#1275e2`), supported by a balanced secondary slate blue (`#5f78a3`), and accented by a distinctive burnt orange tertiary (`#c55b00`) for high-priority calls to action or alerts. Neutrals are calibrated around a cool, professional gray (`#74777f`) to provide optimal contrast on light backgrounds.

## Typography
The typography system relies entirely on **Inter** across headlines, body copy, and labels. This creates a unified, geometric, and highly legible reading experience across both desktop and mobile viewports.

## Layout & Spacing
A standard fluid grid system is used with consistent gutters and margins. Spacing follows a modular rhythm scale (`space-xs` to `space-xl`) to maintain consistent padding, element separation, and layout alignment across components.

## Elevation & Depth
Elevation is conveyed primarily through subtle tonal layers and clean, low-contrast borders rather than heavy drop shadows, aligning with a modern, flat-yet-structured design approach.

## Shapes
The roundedness level is set to `2` (Rounded), providing UI elements with a friendly yet polished 0.5rem base radius (`rounded-lg` at 1rem), softening containers, buttons, and input fields appropriately.

## Components
Components follow the established token rules: buttons use the primary blue (`#1275e2`), inputs and cards incorporate the `2` roundedness style, and all typography strictly leverages the **Inter** font family.