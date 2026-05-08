# Implementing Scroll — Browser API

`scrollBy()` is a native browser API built into all scrollable DOM elements. Part of the `Element` interface — no imports, no Angular APIs, no animation code required.

```typescript
element.scrollBy({ left: 280, behavior: 'smooth' });
```

## Options

| Property | Type | Description |
|---|---|---|
| `left` | `number` | Pixels to scroll horizontally. Negative = left, positive = right. |
| `top` | `number` | Pixels to scroll vertically. |
| `behavior` | `'smooth' \| 'instant' \| 'auto'` | `smooth` animates, `instant` jumps, `auto` lets the browser decide. |

## scrollBy vs scrollTo

- **`scrollBy()`** — scrolls *relative* to the current position
- **`scrollTo()`** — scrolls to an *absolute* position

## Usage in this project

In `story-card-container.ts`, `inject(ElementRef)` gives us the host DOM element. We expose a `scroll()` method that wraps `scrollBy()`, which the parent component calls via `viewChild`:

```typescript
// story-card-container.ts
readonly #el = inject(ElementRef);

scroll(px: number): void {
  this.#el.nativeElement.scrollBy({ left: px, behavior: 'smooth' });
}

// community-stories.ts
carousel = viewChild(StoryCardContainer);

scrollLeft()  { this.carousel()?.scroll(-280); }
scrollRight() { this.carousel()?.scroll(280);  }
```
