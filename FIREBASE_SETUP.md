# Cross-device dashboard sync

The dashboard now keeps portfolio content in Cloud Firestore. This is what makes a save on the laptop appear on the mobile device (and vice versa).

1. Create a Firebase project, register a **Web app**, and create a **Cloud Firestore** database.
2. In Firebase Authentication, enable **Email/Password** and create one user for the dashboard.
3. Copy the Web app configuration values into `.env` locally and into the Vercel project's environment variables. Use [`.env.example`](.env.example) as the variable list.
4. Deploy the project again after adding the variables.
5. In Firestore Rules, publish these rules so the public portfolio can read content, while only a signed-in dashboard user can change it:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /portfolio-content/current {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

The dashboard header shows **Cloud sync active** once both the configuration and Firestore rules are ready. Concurrent edits to different dashboard sections are merged; if two devices save the same section, the most recently saved version wins.
