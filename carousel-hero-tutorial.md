# Building a Carousel Hero in Angular

## Overview

This tutorial walks through building an auto-advancing carousel hero section with pagination dots. By the end you will understand how Angular signals drive reactive UI, how interpolation renders dynamic data into templates, and how lifecycle hooks manage setup and teardown.

---

## What we built

A full-screen hero section that:
- Cycles through slides every 5 seconds automatically
- Swaps the background photo, heading, body text, and button labels per slide
- Shows pagination dots at the bottom — the active dot is brighter
- Cleans up its timer when the component is destroyed

---

## Step 1 — Define the data

First, define a TypeScript interface that describes the shape of a single slide:

```typescript
interface Slide {
  image: string;
  title: string[];
  text: string[];
  primaryBtn: string;
  secondaryBtn: string;
}
```

Then create the slides array on the component class:

```typescript
slides: Slide[] = [
  {
    image: "url('/hero-photo.png')",
    title: ['Your Donation Makes', 'A Difference'],
    text: ['Each donation supports patients, advancements in treatment options and ultimately — the search for cures'],
    primaryBtn: 'Donate',
    secondaryBtn: 'Learn More',
  },
  // ...more slides
];
```

---

## Step 2 — Signals

### What is a signal?

A **signal** is a reactive value in Angular. When a signal's value changes, any template or computed value that reads it automatically updates — no manual change detection needed.

```typescript
import { signal } from '@angular/core';

currentIndex = signal(0);
```

`signal(0)` creates a signal with an initial value of `0`. You read it by calling it like a function:

```typescript
this.currentIndex() // → 0
```

You update it with `.set()` or `.update()`:

```typescript
this.currentIndex.set(2);                          // set to a specific value
this.currentIndex.update(i => (i + 1) % 3);       // derive next value from current
```

### Computed signals

A **computed** signal derives its value from other signals. It recalculates automatically whenever its dependencies change:

```typescript
import { computed } from '@angular/core';

currentSlide = computed(() => this.slides[this.currentIndex()]);
```

Every time `currentIndex` changes, `currentSlide` recalculates and returns the new slide object. The template re-renders only the parts that read `currentSlide()`.

---

## Step 3 — Interpolation

**Interpolation** is how you render dynamic values into the template. Angular reads the expression inside `{{ }}` and replaces it with the result as a string.

```html
<button class="hero-button primary">{{ currentSlide().primaryBtn }}</button>
```

Here, `currentSlide()` calls the computed signal, returning the current slide object. `.primaryBtn` accesses the button label on that object. Angular inserts the result as text content.

### Interpolation with `@for`

For arrays, use Angular's `@for` block to loop over the values:

```html
@for (line of currentSlide().title; track line) {
  <h1>{{ line }}</h1>
}
```

`@for` iterates over `currentSlide().title` (an array of strings) and renders one `<h1>` per item. `track line` helps Angular efficiently update the DOM by identifying which items changed.

### Binding with `[ ]`

Square bracket syntax binds an expression to a DOM property rather than rendering it as text:

```html
<div class="wrapper" [style.background-image]="currentSlide().image">
```

This sets the element's `background-image` style to the value of `currentSlide().image`. It updates automatically whenever the signal changes.

### Class binding

```html
<button class="dot" [class.active]="currentIndex() === $index">
```

`[class.active]` adds the `active` CSS class when the expression is `true`, and removes it when `false`. `$index` is the current loop iteration provided by `@for`.

---

## Step 4 — Event binding with `( )`

Round bracket syntax binds a DOM event to a component method:

```html
<button class="dot" (click)="goToSlide($index)">
```

When the dot is clicked, `goToSlide($index)` is called, setting `currentIndex` to that slide's position and jumping to it immediately.

```typescript
goToSlide(index: number) {
  this.currentIndex.set(index);
}
```

---

## Step 5 — Lifecycle hooks

### `ngOnInit`

`ngOnInit` is a **lifecycle hook** — a method Angular calls at a specific point in the component's life. `ngOnInit` runs once, immediately after Angular has finished setting up the component's inputs and data bindings.

This is the right place to start a timer:

```typescript
import { OnInit } from '@angular/core';

export class HeroSection implements OnInit {
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.slides.length);
    }, 5000);
  }
}
```

Every 5000ms (5 seconds), `currentIndex` advances to the next slide. When it reaches the last slide, the modulo (`%`) wraps it back to `0`.

> **Why not start the timer in the constructor?**
> The constructor runs before Angular has fully initialised the component. `ngOnInit` is safer because bindings are guaranteed to be ready.

### `ngOnDestroy`

`ngOnDestroy` runs once, just before Angular removes the component from the DOM. It is the right place to clean up anything that would otherwise keep running in the background.

```typescript
import { OnDestroy } from '@angular/core';

export class HeroSection implements OnDestroy {
  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
```

Without this, the `setInterval` would keep firing even after the component is gone — a **memory leak**. Calling `clearInterval` stops the timer and frees the resource.

> The `implements OnInit, OnDestroy` declarations tell TypeScript that the class promises to define these methods. If you forget to implement one, TypeScript will warn you.

---

## Step 6 — Positioning the dots

The dots container is positioned absolutely relative to the wrapper using standard CSS:

```scss
.wrapper {
  position: relative; // establishes the positioning context
}

.dots {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%); // perfectly centers regardless of dot count
}
```

`left: 50%` moves the left edge of `.dots` to the center of `.wrapper`. `translateX(-50%)` then shifts it back by half its own width, landing it exactly in the middle.

---

## Summary

| Concept | What it does |
|---|---|
| `signal(value)` | Creates a reactive value that triggers UI updates on change |
| `computed(() => ...)` | Derives a value from signals, recalculates automatically |
| `{{ expression }}` | Interpolates a dynamic value into the template as text |
| `[property]="expression"` | Binds an expression to a DOM property |
| `[class.name]="condition"` | Conditionally adds/removes a CSS class |
| `(event)="method()"` | Calls a method when a DOM event fires |
| `ngOnInit` | Runs once after the component is ready — good for timers and data fetching |
| `ngOnDestroy` | Runs once before the component is removed — good for cleanup |
