import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | ACAMP`;

    return () => {
      document.title = prevTitle;
    };
  });

  return { title: document.title };
};

export default useTitle;
