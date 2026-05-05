# Handling Media Queries with Angular Conditionals and TypeScript

Angular's `@if`/`@else` control flow works great with breakpoints. Here's how to wire it up:

## Service to Track Breakpoints

```typescript
// breakpoint.service.ts
import { Injectable, signal } from '@angular/core';

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;
type Breakpoint = keyof typeof BREAKPOINTS | 'xs';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  readonly current = signal<Breakpoint>(this.getActive());

  constructor() {
    const observer = new ResizeObserver(() => {
      this.current.set(this.getActive());
    });
    observer.observe(document.body);
  }

  private getActive(): Breakpoint {
    const w = window.innerWidth;
    if (w >= BREAKPOINTS.xl) return 'xl';
    if (w >= BREAKPOINTS.lg) return 'lg';
    if (w >= BREAKPOINTS.md) return 'md';
    if (w >= BREAKPOINTS.sm) return 'sm';
    return 'xs';
  }
}
```

## Component

```typescript
// my.component.ts
import { Component, inject, computed } from '@angular/core';
import { BreakpointService } from './breakpoint.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
})
export class MyComponent {
  private bpService = inject(BreakpointService);

  bp = this.bpService.current;
  isMobile = computed(() => this.bp() === 'xs' || this.bp() === 'sm');
}
```

## Template with `@if`/`@else`

```html
<!-- my.component.html -->

<!-- Simple mobile vs desktop split -->
@if (isMobile()) {
  <nav class="mobile-nav">...</nav>
} @else {
  <nav class="desktop-nav">...</nav>
}

<!-- Fine-grained per breakpoint -->
@if (bp() === 'xl') {
  <p>Extra large layout</p>
} @else if (bp() === 'lg') {
  <p>Large layout</p>
} @else if (bp() === 'md') {
  <p>Medium layout</p>
} @else {
  <p>Mobile layout</p>
}
```

## Alternatively: Angular CDK

If you're already using Angular Material, the CDK has a built-in `BreakpointObserver` that integrates cleanly with signals:

```typescript
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({ ... })
export class MyComponent {
  private bpObserver = inject(BreakpointObserver);

  isMobile = toSignal(
    this.bpObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );
}
```

```html
@if (isMobile()) {
  <p>Mobile</p>
} @else {
  <p>Desktop</p>
}
```

## Key Points

- The `signal()`-based service approach is the most modern (Angular 17+) and works well with `@if` since signals are reactive by default — Angular knows to re-render when the signal changes.
- `@if`/`@else` replaced `*ngIf` in Angular 17 and is now the preferred syntax.
- The CDK `BreakpointObserver` + `toSignal()` combo is great if you're already on Angular Material, since you get Tailwind-compatible named breakpoints for free (`Breakpoints.Handset`, `Breakpoints.Web`, etc.).
