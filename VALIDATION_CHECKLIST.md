# Chatty AI - Validation Checklist

## Project Structure Stability Guidelines

This document outlines the validation steps to ensure the website's structure and layout remain stable after any changes.

## Pre-Change Validation

### 1. Structure Consistency
- [ ] Review the component hierarchy before adding new elements
- [ ] Ensure new elements follow existing layout patterns
- [ ] Verify responsive breakpoints match existing design system
- [ ] Check z-index values to prevent stacking conflicts
- [ ] Validate CSS containment (`contain: layout style paint`) where needed

### 2. Dependency Checks
- [ ] Verify all imports are used (no unused imports)
- [ ] Check for circular dependencies
- [ ] Ensure TypeScript types are properly defined
- [ ] Validate React hooks dependencies arrays
- [ ] Confirm all required props are provided

### 3. Code Quality
- [ ] Run `npm run build` to check for compilation errors
- [ ] Run linter to catch warnings and errors
- [ ] Verify no console errors in browser DevTools
- [ ] Check for TypeScript type errors
- [ ] Ensure all client components have `'use client'` directive

## Post-Change Validation

### 4. Layout Validation
- [ ] Test on mobile viewport (375px width)
- [ ] Test on tablet viewport (768px width)
- [ ] Test on desktop viewport (1920px width)
- [ ] Verify no horizontal scrolling
- [ ] Check for overlapping elements
- [ ] Validate grid background visibility (5% opacity)
- [ ] Ensure navbar doesn't overlap content

### 5. Functionality Testing
- [ ] Test all interactive components
- [ ] Verify autoplay functionality (if applicable)
- [ ] Check dropdown menus open/close correctly
- [ ] Validate form submissions
- [ ] Test navigation between pages
- [ ] Verify video embeds load correctly

### 6. Performance Checks
- [ ] Check bundle size hasn't increased significantly
- [ ] Verify images are optimized
- [ ] Ensure lazy loading is implemented where needed
- [ ] Check for memory leaks in useEffect hooks
- [ ] Validate proper cleanup in useEffect return functions

## Common Issues to Watch For

### Layout Breakage
- **Z-index conflicts**: Use `isolate` class and proper stacking contexts
- **Overflow issues**: Add `overflow-hidden` to containers
- **Responsive breakpoints**: Test all screen sizes
- **Grid background**: Ensure sections use `bg-[var(--bg-primary)]` or transparent

### Build Errors
- **Webpack chunking**: Clear `.next` folder if chunks are corrupted
- **Module not found**: Check import paths (relative vs absolute)
- **Type errors**: Ensure all props match TypeScript interfaces
- **Server component errors**: Add `'use client'` to components using hooks

### Runtime Errors
- **Autoscroll issues**: Use `scrollTo()` instead of `scrollIntoView()`
- **State management**: Ensure proper dependency arrays in hooks
- **Event handlers**: Remove unused event parameters
- **Memory leaks**: Clean up timers and event listeners

## Quick Fix Commands

```bash
# Clear build cache and restart dev server
pkill -f "next dev" && rm -rf .next && npm run dev

# Run build validation
npm run build

# Check for linting errors
npm run lint

# Type check
npx tsc --noEmit
```

## File Structure Guidelines

### Component Organization
- Interactive components: `components/interactive-hero/`
- Page components: `app/`
- Shared components: `components/`
- Types: `components/interactive-hero/types.ts`

### Import Patterns
- Use `type` keyword for type-only imports
- Use relative paths for local imports
- Use `@/` alias for root-level imports
- Group imports: React → Third-party → Local

## Current Project Status

✅ **Build Status**: Passing
✅ **Linting**: 0 errors, 0 warnings (after fixes)
✅ **TypeScript**: No type errors
✅ **Structure**: Stable and consistent

## Maintenance Notes

- All video embeds use responsive iframe with `width="100%"` and `height="100%"`
- Logo components use `BrandLogo` for consistency
- Interactive hero uses proper containment and z-index management
- All client components have `'use client'` directive
- Autoscroll uses `scrollTo()` for contained scrolling

---

**Last Updated**: After video embed additions and linting fixes
**Next Review**: Before adding new major features








