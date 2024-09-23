import React, { useEffect } from "react";

const useTitleChange = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitleChange;
