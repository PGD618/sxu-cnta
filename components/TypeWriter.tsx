"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

interface TypeWriterProps {
    text: string;
    speed?: number; // Speed in characters per second
}

const TypeWriter = ({ text, speed = 5 }: TypeWriterProps) => {
    const controls = useAnimation();
    const textChars = Array.from(text);
    const duration = textChars.length / speed;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration / textChars.length, delayChildren: i * 0.1 },
        }),
    };

    const childVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const cursorVariants: Variants = {
        blinking: {
            opacity: [0, 1, 0],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 1]
            }
        }
    };

    useEffect(() => {
        let isMounted = true;
        const sequence = async () => {
            while (isMounted) {
                await controls.start("visible");
                await new Promise(resolve => setTimeout(resolve, 2000));
                if (!isMounted) return;
                await controls.start("hidden");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        };
        sequence();

        return () => {
            isMounted = false;
        };
    }, [controls]);

    return (
        <motion.div
            style={{ display: "inline-flex", flexWrap: 'wrap', justifyContent: 'center' }}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {textChars.map((char, index) => (
                <motion.span key={index} variants={childVariants}>
                    {char}
                </motion.span>
            ))}
            <motion.span
                style={{ marginLeft: '5px', height: '1.2em', width: '2px', backgroundColor: 'currentColor' }}
                variants={cursorVariants}
                animate="blinking"
            />
        </motion.div>
    );
};

export default TypeWriter;