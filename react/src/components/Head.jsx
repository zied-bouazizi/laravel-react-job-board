import { useEffect } from 'react';

function Head({ title }) {
  const appName = import.meta.env.VITE_APP_NAME || 'React';

  useEffect(() => {
    document.title = title ? `${title} | ${appName}` : appName;
  }, [title, appName]);

  return null;
}

export default Head;