# Specification

## Summary
**Goal:** Make the “Contact Me” button open a Gmail web compose window addressed to randombookcreator@gmail.com (no mailto).

**Planned changes:**
- Update the “Contact Me” button in `frontend/src/App.tsx` to render as a link pointing to `https://mail.google.com/mail/?view=cm&fs=1&to=randombookcreator@gmail.com`.
- Ensure the link opens in a new tab/window and includes `rel="noopener noreferrer"`, while keeping the visible label “Contact Me” and existing styling/spacing consistent.

**User-visible outcome:** Clicking “Contact Me” opens a new tab/window with a Gmail compose page pre-addressed to randombookcreator@gmail.com.
