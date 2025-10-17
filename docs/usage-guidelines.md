# Qualia Design System - Usage Guidelines

## Overview

This document provides comprehensive guidelines for using the Qualia Design System tokens and components. These guidelines ensure consistency across all Qualia products and maintain our design principles.

## Design Tokens

### Color Usage

#### Primitive Colors
Primitive colors are the foundation of our color system. Use them for:
- Building semantic color tokens
- Creating component variants
- Maintaining color consistency across themes

**Never use primitive colors directly in components.** Always use semantic or interactive tokens.

#### Brand Colors
- **Primary** (`#22C55E`): Main brand color, use for primary actions and brand moments
- **Secondary** (`#16A34A`): Supporting brand color, use for hover states and secondary brand elements
- **Accent** (`#86EFAC`): Light accent color, use sparingly for highlights and success states

#### Semantic Colors
- **Success**: Confirmation messages, completed states, positive feedback
- **Warning**: Caution messages, pending states, attention required
- **Error**: Error messages, failed states, destructive actions
- **Info**: Informational messages, neutral feedback, general information

#### Interactive Colors
- **Primary**: Main call-to-action buttons, primary navigation
- **Secondary**: Secondary buttons, less prominent actions
- **Destructive**: Delete buttons, dangerous actions
- **Success**: Confirm buttons, positive actions
- **AI**: AI-powered features, smart actions

### Typography

#### Font Families
- **Primary**: Inter (fallback to system fonts)
- **Mono**: SF Mono (fallback to monospace fonts)

#### Font Sizes
- **xs** (12px): Captions, labels
- **sm** (14px): Body text, form inputs
- **md** (16px): Default body text
- **lg** (18px): Emphasized text, subheadings
- **xl** (20px): Section headings
- **2xl** (24px): Page headings
- **3xl** (30px): Hero headings
- **4xl** (36px): Display headings

#### Font Weights
- **Normal** (400): Body text, descriptions
- **Medium** (500): Emphasized text, buttons
- **Semibold** (600): Headings, important text
- **Bold** (700): Major headings, high emphasis

### Spacing

Use our spacing scale for consistent layouts:
- **xs** (4px): Fine adjustments, tight spacing
- **sm** (8px): Close relationships, form elements
- **md** (16px): Default spacing, comfortable reading
- **lg** (24px): Section separation, card padding
- **xl** (32px): Major sections, generous spacing
- **2xl** (48px): Page sections, hero areas
- **3xl** (64px): Large page sections, maximum spacing

### Border Radius

- **none** (0px): Sharp edges, technical interfaces
- **sm** (4px): Subtle rounding, form inputs
- **md** (8px): Standard rounding, buttons, cards
- **lg** (12px): Prominent rounding, large buttons
- **xl** (16px): Generous rounding, hero elements
- **full** (9999px): Pill shapes, avatar images

## Component Guidelines

### Buttons

#### When to Use Each Variant

**Primary Buttons**
- Main call-to-action on a page or section
- Form submissions
- Primary navigation actions
- Limit to one per view/section

**Secondary Buttons**
- Supporting actions
- Cancel actions
- Less important but still prominent actions
- Multiple buttons in button groups

**Destructive Buttons**
- Delete actions
- Permanent changes
- Actions that cannot be undone
- Always pair with confirmation dialogs

**Success Buttons**
- Confirm actions
- Save changes
- Complete processes
- Positive confirmations

**AI Buttons**
- AI-powered features
- Smart suggestions
- Automated actions
- Machine learning functionality

#### Button Sizes

**Small** (`sm`)
- Dense interfaces
- Secondary actions
- Inline actions within text

**Medium** (`md`) - Default
- Standard interface elements
- Form actions
- Most common use case

**Large** (`lg`)
- Hero sections
- Mobile interfaces
- High-importance actions

#### Accessibility Requirements

- Minimum touch target: 44px x 44px
- Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Focus indicators must be visible
- Include ARIA labels for icon-only buttons
- Support keyboard navigation

### Layout Principles

#### Container Widths
- Use `fillContainer` for full-width actions (mobile, forms)
- Use `hugContent` for inline actions (toolbar buttons, tags)

#### Spacing Between Elements
- Related items: `sm` (8px)
- Form fields: `md` (16px)
- Sections: `lg` (24px) to `2xl` (48px)
- Page sections: `2xl` (48px) to `3xl` (64px)

## Implementation

### CSS Custom Properties

Include the tokens CSS file in your project:

```css
@import 'tokens/qualia-tokens.css';

/* Example usage */
.my-component {
  background-color: var(--surface-card);
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

### React Components

```jsx
import Button from 'components/Button';

// Primary action
<Button variant="primary" size="md" onClick={handleSubmit}>
  Save Changes
</Button>

// Secondary action
<Button variant="secondary" size="md" onClick={handleCancel}>
  Cancel
</Button>

// Full width form button
<Button variant="primary" size="lg" fullWidth>
  Create Account
</Button>
```

## Red Flags - Don't Do This

❌ **Don't use primitive colors directly**
```css
/* Wrong */
.button {
  background: #22C55E; /* primitive color */
}

/* Correct */
.button {
  background: var(--interactive-primary); /* semantic token */
}
```

❌ **Don't hardcode spacing values**
```css
/* Wrong */
.card {
  padding: 16px; /* hardcoded value */
}

/* Correct */
.card {
  padding: var(--spacing-md); /* token */
}
```

❌ **Don't mix semantic meanings**
```jsx
{/* Wrong - using success color for error state */}
<Button variant="success">Delete Account</Button>

{/* Correct - using destructive for dangerous action */}
<Button variant="destructive">Delete Account</Button>
```

❌ **Don't use multiple primary buttons**
```jsx
{/* Wrong - confusing hierarchy */}
<Button variant="primary">Save</Button>
<Button variant="primary">Cancel</Button>

{/* Correct - clear hierarchy */}
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
```

## Decision Trees

### Choosing Button Variants

1. **Is this the most important action on the page?**
   - Yes → Use `primary`
   - No → Continue to step 2

2. **Is this a dangerous/destructive action?**
   - Yes → Use `destructive`
   - No → Continue to step 3

3. **Is this a positive confirmation?**
   - Yes → Use `success`
   - No → Continue to step 4

4. **Is this an AI-powered feature?**
   - Yes → Use `ai`
   - No → Use `secondary`

### Choosing Colors

1. **Are you styling an interactive element?**
   - Yes → Use `interactive-*` tokens
   - No → Continue to step 2

2. **Are you indicating status/state?**
   - Yes → Use `semantic-*` tokens
   - No → Continue to step 3

3. **Are you styling surfaces/backgrounds?**
   - Yes → Use `surface-*` tokens
   - No → Continue to step 4

4. **Are you styling text?**
   - Yes → Use `text-*` tokens
   - No → Consider if you need a primitive color or new semantic token

## Support

For questions about implementation or usage:
- Slack: #design-systems
- Email: design-systems@qualia.com
- Documentation: [Internal Wiki Link]

---

**Version**: 1.0  
**Last Updated**: October 2024  
**Maintained by**: Design Systems Team