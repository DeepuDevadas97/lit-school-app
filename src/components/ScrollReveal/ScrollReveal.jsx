import { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

export default function ScrollReveal({ children, delay = 0, className = "" }) {
    const elementRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
        ) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal ${visible ? "scroll-reveal--visible" : ""} ${className}`}
            style={{ "--scroll-reveal-delay": `${delay}ms` }}
        >
            {children}
        </div>
    );
}
