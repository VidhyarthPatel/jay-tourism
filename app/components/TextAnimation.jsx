"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextAnimation({
    children,
    animateOnScroll = true,
    delay = 0,
}) {
    const containerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    // Wait for fonts to load before allowing animation setup
    useEffect(() => {
        let cancelled = false;

        const init = () => {
            if (!cancelled) setIsReady(true);
        };

        // Wait for fonts + a rAF frame to ensure layout is stable
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                // Double rAF to ensure the browser has painted with final fonts
                requestAnimationFrame(() => {
                    requestAnimationFrame(init);
                });
            });
        } else {
            // Fallback for browsers without document.fonts
            requestAnimationFrame(() => {
                requestAnimationFrame(init);
            });
        }

        return () => {
            cancelled = true;
        };
    }, []);

    // Run the actual SplitText + GSAP animation once ready
    useEffect(() => {
        if (!isReady) return;
        if (!containerRef.current) return;

        const splitRefs = [];
        const allLines = [];

        let elements = [];
        if (containerRef.current.hasAttribute("data-animate-wrapper")) {
            elements = Array.from(containerRef.current.children);
        } else {
            elements = [containerRef.current];
        }

        elements.forEach((element) => {
            const split = new SplitText(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            });

            splitRefs.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;
            if (textIndent && textIndent !== "0px") {
                if (split.lines.length > 0) {
                    split.lines[0].style.paddingLeft = textIndent;
                }
                element.style.textIndent = "0";
            }

            allLines.push(...split.lines);
        });

        // If SplitText produced no lines (edge case), bail out
        if (allLines.length === 0) {
            return () => {
                splitRefs.forEach((split) => {
                    if (split) split.revert();
                });
            };
        }

        // Set initial state — lines hidden below their mask
        gsap.set(allLines, { y: "100%" });

        // Force a ScrollTrigger refresh now that SplitText has altered the DOM
        ScrollTrigger.refresh(true);

        const animationProps = {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: delay,
        };

        let tween;

        if (animateOnScroll) {
            tween = gsap.to(allLines, {
                ...animationProps,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    once: true,
                    // Invalidate on refresh so positions are recalculated
                    invalidateOnRefresh: true,
                },
            });
        } else {
            tween = gsap.to(allLines, animationProps);
        }

        return () => {
            if (tween) {
                if (tween.scrollTrigger) {
                    tween.scrollTrigger.kill();
                }
                tween.kill();
            }
            splitRefs.forEach((split) => {
                if (split) split.revert();
            });
        };
    }, [isReady, animateOnScroll, delay]);

    return (
        <div ref={containerRef} data-animate-wrapper="true">
            {children}
        </div>
    );
}