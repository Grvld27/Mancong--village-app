import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';
import '../style/MotionCounter.css'

const MotionCounter = ({ targetNumber = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, targetNumber, {
      duration: 2,
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [targetNumber]);

  return (
    <span>{count}</span>
  );
};

export default MotionCounter;
