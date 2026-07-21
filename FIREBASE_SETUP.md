# Cross-device dashboard sync

The dashboard now keeps portfolio content in Cloud Firestore. This is what makes a save on the laptop appear on the mobile device (and vice versa).

1. Create a Firebase project, register a **Web app**, and create a **Cloud Firestore** database.
2. In Firebase Authentication, enable **Email/Password** and create one user for the dashboard. Do not enable public self-registration in the app.
3. Copy the Web app configuration values into `.env` locally and into the Vercel project's environment variables. Use [`.env.example`](.env.example) as the variable list.
4. Deploy the project again after adding the variables.
5. Deploy the included [`firestore.rules`](firestore.rules). These rules keep the portfolio readable publicly but require an authenticated user with an `admin: true` Firebase custom claim to change it. Set the claim from a trusted server or an Admin SDK script (never from this browser app), then have the user sign out and back in so the token refreshes.

```bash
firebase deploy --only firestore:rules
```

The dashboard header shows **Cloud sync active** once both the configuration and Firestore rules are ready. Concurrent edits to different dashboard sections are merged; if two devices save the same section, the most recently saved version wins.
