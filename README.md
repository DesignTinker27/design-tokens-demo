# Qualia Design System Tokens

A comprehensive design token system for Qualia's design system, providing consistent colors, typography, spacing, and components across all products.

## 🚀 What's Included

- **CSS Custom Properties** (`tokens/qualia-tokens.css`) - Ready for engineering consumption
- **JSON Tokens** (`tokens/qualia-tokens.json`) - For build tools and documentation
- **React Button Component** (`components/Button.jsx`) - Token-based implementation
- **Usage Guidelines** (`docs/usage-guidelines.md`) - Comprehensive implementation guide

## 🎨 Token Categories

### Colors
- **Primitive Colors**: Base color palette (grays, reds, greens, blues, oranges)
- **Brand Colors**: Primary, secondary, and accent brand colors
- **Semantic Colors**: Success, warning, error, info states
- **Interactive Colors**: Button states, hover effects, active states
- **Surface Colors**: Backgrounds, cards, borders
- **Text Colors**: Primary, secondary, muted, inverse text

### Typography
- **Font Families**: Primary (Inter) and monospace stacks
- **Font Sizes**: xs (12px) to 4xl (36px)
- **Font Weights**: Normal to bold (400-700)
- **Line Heights**: Tight, normal, relaxed

### Spacing
- **Spacing Scale**: xs (4px) to 3xl (64px)
- **Consistent Layout**: Based on 8px grid system

### Border Radius
- **Radius Scale**: None to full (pill shapes)
- **Component Consistency**: Matching visual language

## 🛠️ Usage

### CSS Implementation

```css
@import 'tokens/qualia-tokens.css';

.my-component {
  background-color: var(--surface-card);
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
}
```

### React Component Example

```jsx
import Button from './components/Button';

<Button variant="primary" size="md">
  Save Changes
</Button>
```

### Available Button Variants
- `primary` - Main call-to-action
- `secondary` - Supporting actions
- `destructive` - Delete/dangerous actions
- `success` - Confirmation actions
- `ai` - AI-powered features

### Available Button Sizes
- `sm` - Small (32px height)
- `md` - Medium (40px height) - Default
- `lg` - Large (48px height)

## 📋 Integration Checklist

For engineering teams integrating these tokens:

- [ ] Include `qualia-tokens.css` in your build process
- [ ] Replace hardcoded colors with token variables
- [ ] Update button implementations to use the Button component
- [ ] Ensure accessibility standards (contrast ratios, focus states)
- [ ] Test responsive behavior across device sizes
- [ ] Validate with design team before shipping

## 🎯 Design Principles

1. **Consistency First**: Use tokens instead of hardcoded values
2. **Semantic Naming**: Colors describe purpose, not appearance
3. **Scalable System**: Easy to extend and maintain
4. **Accessibility**: WCAG 2.1 AA compliant contrast ratios
5. **Developer Experience**: Clear naming and comprehensive documentation

## 📖 Documentation

See `docs/usage-guidelines.md` for:
- Detailed usage instructions
- Component guidelines
- Accessibility requirements
- Implementation examples
- Common pitfalls and red flags

## 🤝 Contributing

When proposing changes to tokens:
1. Ensure backward compatibility
2. Update documentation
3. Test across all affected components
4. Get design team approval
5. Consider impact on existing implementations

## 📊 Token Metrics

- **Colors**: 60+ semantic color tokens
- **Typography**: 12+ font and spacing tokens
- **Components**: Token-based button system
- **Coverage**: Ready for 90%+ of UI needs

---

**Generated**: October 2024  
**Maintained by**: Design Systems Team  
**For questions**: Reach out in #design-systems Slack channel