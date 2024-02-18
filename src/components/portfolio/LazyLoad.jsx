import { useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";

// Load The Component When The Component Has 1px Shown In The Screen
function LazyLoad({ children }) {
  const ref = useRef(null);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const observer = function (entries, observer) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setShowChildren(true);
        observer.unobserve(ref.current);
      }
    };
    const observerImg = new IntersectionObserver(observer, {
      root: null,
      threshold: 0,
    });
    observerImg.observe(ref.current);
  }, []);

  return (
    <Row
      className="row-gap-2 content"
      ref={ref}
      gap={2}
    >
      {showChildren && children}
    </Row>
  );
}

export default LazyLoad;
