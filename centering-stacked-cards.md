# Centering Stacked Cards

## The pattern

Two cards, one on top of the other, both horizontally centered inside their container.

---

## The container

Use **flexbox** on the container. Set the direction to `column` so children stack vertically, and use `align-items: center` to pull each child to the horizontal center.

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

`align-items` controls the **cross axis**. In a column layout, the cross axis runs left-to-right, so `center` means horizontally centered.

---

## The cards

Each card uses `position: relative`. This keeps the card in normal document flow (it still takes up space and stacks naturally) but lets you nudge it with `top`, `left`, `right`, or `bottom` relative to where it would normally sit.

```css
.card {
  position: relative;
  width: 400px; /* give it an explicit width */
}
```

> **Why `relative` and not `absolute`?**  
> `position: absolute` removes the element from flow — the container collapses and stacking breaks. `relative` stays in flow, so the second card naturally appears below the first.

---

## Full example

```html
<div class="container">
  <div class="card">Card One</div>
  <div class="card">Card Two</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px; /* space between the two cards */
}

.card {
  position: relative;
  width: 400px;
}
```

---

## Quick reference

| Property | Where | What it does |
|---|---|---|
| `display: flex` | container | enables flexbox |
| `flex-direction: column` | container | stacks children top-to-bottom |
| `align-items: center` | container | centers children on the horizontal axis |
| `gap` | container | space between the stacked cards |
| `position: relative` | card | keeps card in flow, enables offset if needed |
| `width` | card | prevents card from stretching to full container width |
