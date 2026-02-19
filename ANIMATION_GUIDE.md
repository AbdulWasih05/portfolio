# Framer Motion Animation Patterns - Portfolio Guide

This document outlines all the animation patterns and examples used in your upgraded portfolio.

## Overview

Your portfolio now features **rich, smoothly animated interactions** using:
- **Framer Motion** for complex motion sequences
- **CSS transitions** for simple state changes
- **Intersection Observer** for scroll-triggered animations
- **Staggered animations** for list items and cards

---

## 1. **Hero Section (`HeroNew.tsx`)**

### Page Load Animations
```tsx
// Initial staggered entrance
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  Hasan Ekkeri
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  Backend & Security Developer
</motion.p>
```

**Effect**: Elements fade and slide in from bottom, staggered with delays
**Use Case**: Creates elegant entrance for hero content

### Button Hover Effects
```tsx
<motion.button
  whileHover={{ y: -2 }}
  whileTap={{ y: 0 }}
>
  View My Work
</motion.button>
```

**Effect**: Button lifts up slightly on hover, returns to normal on click
**Use Case**: Micro-interaction for better feedback

### Profile Image Hover
```tsx
<motion.div
  className="aspect-square rounded-2xl..."
  whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
  transition={{ duration: 0.3 }}
>
```

**Effect**: Enhanced shadow appears on hover with smooth transition
**Use Case**: Draws attention to profile image

### Scroll Indicator Animation
```tsx
<motion.div
  className="absolute bottom-8 left-1/2..."
  animate={{ y: [0, 8, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

**Effect**: Bouncing arrow that continuously animates
**Use Case**: Guides users to scroll down

---

## 2. **Navbar (`Navbar.tsx`)**

### Initial Slide Down
```tsx
<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.3 }}
>
```

**Effect**: Navbar slides in from top on page load
**Use Case**: Professional entrance animation

### Animated Underline Indicator
```tsx
{activeSection === item.href.slice(1) && (
  <motion.div
    layoutId="activeNav"
    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
  />
)}
```

**Effect**: Active nav item smoothly animates with spring physics
**Use Case**: Smooth, fluid navigation feedback

### Mobile Menu Toggle Animation
```tsx
<motion.div
  animate={isMobileMenuOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
/>
```

**Effect**: Hamburger icon morphs into X
**Use Case**: Visual feedback for menu state

---

## 3. **Projects Section (`ProjectsSlider.tsx` + `ProjectCard.tsx`)**

### Staggered Card Entrance
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // 100ms delay between each card
    },
  },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
  {/* Cards render with staggered animation */}
</motion.div>
```

**Effect**: Each project card slides in from bottom with slight delay between them
**Use Case**: Creates visual rhythm and prevents overwhelming the user

### Individual Project Card Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  viewport={{ once: true, margin: '-100px' }}
  whileHover={{ y: -8 }}
>
```

**Effect**: 
- Fades and slides up when scrolled into view
- Lifts up 8px on hover
**Use Case**: Responsive hover feedback

### Technology Tag Animation
```tsx
{technologies.map((tech, i) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 + i * 0.05 }}
    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
  >
    {tech}
  </motion.span>
))}
```

**Effect**: Tags pop in with scaling animation, staggered per tag
**Use Case**: Adds detail and polish to project cards

---

## 4. **Skills Section (`Skills.tsx` + `SkillBar.tsx`)**

### Container Stagger Animation
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: index * 0.1,
    },
  },
};

<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: '-50px' }}
  variants={containerVariants}
>
```

**Effect**: Skills within each category slide in with stagger
**Use Case**: Creates visual hierarchy and flow

### Individual Skill Item
```tsx
<motion.li
  variants={itemVariants}
  className="flex items-center gap-3 text-slate-700 group"
>
  <span className="bg-blue-400 group-hover:bg-blue-600" />
  <span>{skill}</span>
</motion.li>
```

**Variables**:
```tsx
hidden: { opacity: 0, x: -10 }
show: { opacity: 1, x: 0 }
```

**Effect**: Skills slide in from left with fade
**Use Case**: Smooth, elegant list animation

---

## 5. **Contact Section (`Contact.tsx`)**

### Container Stagger for Buttons
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Buttons appear sequentially
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

**Effect**: Contact buttons fade and slide up with stagger
**Use Case**: Gradual reveal of call-to-action buttons

### Info Box Scale Animation
```tsx
<motion.div
  className="bg-blue-50 border border-blue-200 rounded-xl p-8"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
>
```

**Effect**: Box scales up from slightly smaller while fading in
**Use Case**: Highlights important contact information

---

## 6. **Common Animation Patterns**

### Scroll-Triggered Entrance
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}  // Only animate once
>
```

### Hover Effects on Cards
```tsx
whileHover={{ 
  y: -8,  // Lift up
  boxShadow: '0 20px 40px rgba(...)'  // Enhanced shadow
}}
```

### Staggered List with Custom Delays
```tsx
transition={{ 
  delay: index * 0.05,  // Each item has sequential delay
  duration: 0.5 
}}
```

---

## 7. **Button Component Animations (`Button.tsx`)**

```tsx
<motion.button
  whileHover={{ y: -2 }}  // Lift on hover
  whileTap={{ y: 0 }}     // Returns to normal on click
  className="px-6 py-3 bg-blue-600 text-white..."
>
```

**Available Variants**:
- `primary`: Blue button with strong shadow
- `secondary`: Light gray background
- `outline`: Border only with blue text

---

## 8. **Viewport Configuration**

All scroll animations use this config for optimal performance:

```tsx
viewport={{ 
  once: true,           // Only animate once (doesn't repeat)
  margin: '-100px'      // Trigger 100px before entering viewport
}}
```

**Margin helps**:
- Prevent awkward entrance from bottom
- Create smoother visual flow
- Reduce jank by pre-triggering animations

---

## 9. **CSS Custom Animations (globals.css)**

For simple, performant animations, CSS keyframes are used:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out forwards;
}
```

**Benefits**:
- Better performance for simple transitions
- GPU accelerated
- Works during Framer Motion animations

---

## 10. **Performance Tips**

✅ **Do**:
- Use `viewport={{ once: true }}` to prevent repeating animations
- Leverage GPU acceleration with `transform` and `opacity`
- Keep `staggerChildren` small (0.05 - 0.1)
- Use `margin` in viewport for better UX

❌ **Don't**:
- Animate width/height (use transform scale instead)
- Animate expensive properties (box-shadow slowly)
- Use too many simultaneous animations
- Animate on every scroll without throttling

---

## 11. **Advanced Customization Ideas**

### Parallax on Scroll
```tsx
<motion.div
  style={{
    y: useTransform(scrollY, [0, 500], [0, 100])
  }}
>
```

### Animated Counter
```tsx
<motion.div
  initial={{ count: 0 }}
  whileInView={{ count: 100 }}
  transition={{ duration: 2 }}
>
```

### Page Transition
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
/>
```

---

## 12. **Color Scheme Reference**

Your portfolio uses a modern, minimal color stack:

```css
--background: #fafafa         /* Light gray background */
--foreground: #0f172a         /* Dark slate text */
--accent: #3b82f6            /* Bright blue */
--accent-light: #dbeafe      /* Light blue */
--accent-dark: #1e40af       /* Dark blue */
--border: #e2e8f0            /* Light border */
```

---

## 13. **Typography**

- **Headlines**: Poppins (bold, 700-800 weight)
- **Body**: Inter (regular, 400 weight)
- **Accent**: Blue (#3b82f6) for interactive elements

---

## Summary of Improvements

✨ **Your portfolio now features**:
1. Elegant, staggered animations on page load
2. Smooth scroll-triggered entrances for each section
3. Polished hover effects on buttons and cards
4. Spring-based animations for navigation
5. Micro-interactions for better user feedback
6. Responsive animations that work on mobile
7. Performance-optimized with GPU acceleration
8. Accessibility-friendly (respects prefers-reduced-motion if needed)

All animations are **minimal, professional, and enhance UX** without feeling excessive.

---

**Happy coding! 🚀**
