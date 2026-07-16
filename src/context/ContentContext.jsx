import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../lib/firebase";

const ContentContext = createContext(null);
const STORAGE_KEY = "portfolio-content";
const CONTENT_DOCUMENT = "portfolio-content/current";

const defaultContent = {
  home: {
    eyebrow: "👋 Welcome To My Portfolio",
    greeting: "Hello, I'm",
    name: "Prathmesh",
    surname: "Bhagwat",
    role: "Computer Science Engineering Student",
    description:
      "Passionate about developing modern web applications, learning new technologies, and solving real-world problems using React, Python, Java, Django, Machine Learning and modern frontend technologies.",
    buttonText: "View Projects",
    profileImage: "",
  },
  about: {
    heading: "About Me",
    intro:
      "Passionate Computer Science student dedicated to building innovative software solutions and continuously learning modern technologies.",
    name: "Prathmesh Bhagwat",
    education: "B.Tech Computer Science Engineering student currently pursuing my third year at J.G. University",
    bio:
      "Hello! I'm Prathmesh Bhagwat, a passionate and motivated B.Tech Computer Science Engineering student currently pursuing my third year at J.G. University. I enjoy transforming ideas into interactive, responsive, and user-friendly web applications.",
    skills: [
      "React",
      "Python",
      "Java",
      "Django",
      "Machine Learning",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "WordPress",
      "SQL",
    ],
  },
  projects: [
    {
      title: "Real Estate Website",
      description:
        "A responsive real estate web application built using React, Tailwind CSS, and EmailJS. It features property listings, contact functionality, responsive design, and a modern user interface.",
      liveLink: "https://real-estate-client-git-main-prathmesh4.vercel.app/",
      githubLink: "https://github.com/Prathmesh-20",
    },
    {
      title: "Digital Marketing Agency",
      description:
        "A business website showcasing digital marketing services, company information, contact form, and responsive UI built using React and Tailwind CSS.",
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Online Exam System",
      description:
        "A web-based examination platform with student and admin modules, quiz management, and result generation.",
      liveLink: "",
      githubLink: "",
    },
  ],
  skills: [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
    { id: 5, name: "Tailwind CSS" },
    { id: 6, name: "Bootstrap" },
    { id: 7, name: "Python" },
  ],
  contact: {
    email: "bhagwatp853@gmail.com",
    phone: "+91 6354136921",
    address: "Ahmedabad, Gujarat, India",
    availability:
      "Open for internships, freelance projects, collaborations, and full-time opportunities.",
  },
  links: [
    { platform: "GitHub", url: "https://github.com/Prathmesh-20" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
  ],
};

const loadStoredContent = () => {
  if (typeof window === "undefined") {
    return defaultContent;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return defaultContent;
  }

  try {
    return JSON.parse(stored);
  } catch {
    return defaultContent;
  }
};

export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadStoredContent);
  const [syncState, setSyncState] = useState(
    isFirebaseConfigured ? "connecting" : "local"
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    if (!db) return undefined;

    const contentRef = doc(db, CONTENT_DOCUMENT);
    const unsubscribe = onSnapshot(
      contentRef,
      (snapshot) => {
        if (snapshot.exists()) {
          // Keep references for unchanged sections. This prevents an update
          // saved from another device from resetting an unsaved form in the
          // current dashboard.
          setContent((previous) => {
            const remoteContent = { ...defaultContent, ...snapshot.data() };
            let hasChanges = false;
            const nextContent = { ...previous };

            Object.entries(remoteContent).forEach(([section, remoteValue]) => {
              if (JSON.stringify(previous[section]) !== JSON.stringify(remoteValue)) {
                nextContent[section] = remoteValue;
                hasChanges = true;
              }
            });

            return hasChanges ? nextContent : previous;
          });
        }
        setSyncState("synced");
      },
      () => setSyncState("offline")
    );

    return unsubscribe;
  }, []);

  const updateSection = (section, value) => {
    setContent((prev) => ({ ...prev, [section]: value }));

    if (db) {
      // merge: true means saves from different devices update only their
      // section instead of replacing the other device's entire portfolio.
      setDoc(doc(db, CONTENT_DOCUMENT), { [section]: value }, { merge: true })
        .then(() => setSyncState("synced"))
        .catch(() => setSyncState("offline"));
    }
  };

  const value = useMemo(
    () => ({ content, setContent, updateSection, syncState, isCloudSyncEnabled: isFirebaseConfigured }),
    [content, syncState]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent must be used inside a ContentProvider");
  }

  return context;
}

export { defaultContent };
