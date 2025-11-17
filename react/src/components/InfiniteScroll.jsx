import { useEffect, useRef } from "react";

function InfiniteScroll({ onLoadMore, disabled }) {
  const ref = useRef();

  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onLoadMore, disabled]);

  return <div ref={ref} />;
}

export default InfiniteScroll;
