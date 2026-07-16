export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadStoredContent);

  // Save whenever content changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  // Sync between browser tabs/windows
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setContent(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const updateSection = (section, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const value = useMemo(
    () => ({
      content,
      setContent,
      updateSection,
    }),
    [content]
  );

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}