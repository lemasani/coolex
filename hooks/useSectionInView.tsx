import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

interface UseSectionInViewProps {
  margin?: `${number}px` | `${number}%`; // Constrain to valid margin format
  threshold?: number;
  once?: boolean;
}

const useSectionInView = ({
  margin = "-1000px",
  threshold,
  once,
}: UseSectionInViewProps = {}) => {
  const sectionRef = useRef(null);
  const options: UseInViewOptions = {
    margin,
    amount: threshold,
    once,
  };
  const isInView = useInView(sectionRef, options);

  return { sectionRef, isInView };
};

export default useSectionInView;
