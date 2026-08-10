# Add SoloSalon to Your Website

## Option 1 — Use a booking button

This is the easiest and most reliable option.

Create a button on your website that links to:

```text
https://YOUR-DOMAIN.vercel.app/book
```

Suggested button text:

- Book online
- Book appointment
- View availability

This works well with most website builders.

## Option 2 — Embed the booking page

If your website builder allows custom HTML, use:

```html
<iframe
  src="https://YOUR-DOMAIN.vercel.app/book"
  width="100%"
  height="900"
  style="border:0; border-radius:20px;"
  loading="lazy"
  title="Book an appointment">
</iframe>
```

Replace `YOUR-DOMAIN` with your real Vercel domain.

## Instagram, Linktree and Facebook

Do not use iframe code.

Use your normal booking URL:

```text
https://YOUR-DOMAIN.vercel.app/book
```
