import { useRef, useEffect, useState, ReactNode } from 'react';
import '../assets/human1.jpeg';

interface FadeImageProps {
   Imagesrc?:string;
    alt?: string;
    blur?: boolean;
    duration?: number;
    easing?: string;
    delay?: number;
    threshold?: number;
    initialOpacity?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const FadeImage = ({
    Imagesrc ='https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    alt = 'logo',
    blur = false,
    duration = 3,
    easing = 'ease-in',
    delay = 3,
    threshold = 0.1,
    initialOpacity = 0,
    className = '',
    style = {},
    children,
}: FadeImageProps) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer.unobserve(ref.current!);
                    setTimeout(() => {
                        setInView(true);
                    }, delay);
                }
            },
            { threshold }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, delay]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : initialOpacity,
                transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
                filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
                ...style,
            }}
        >
            <img src={Imagesrc} alt={alt} style={{ width: '34%', display: 'block' }} />
            {children}
        </div>
    );
};

export default FadeImage;
