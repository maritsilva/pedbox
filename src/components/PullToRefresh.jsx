import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

export default function PullToRefresh({ children, onRefresh }) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const scrollRef = useRef(null);
  const startYRef = useRef(0);

  const handleTouchStart = (e) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!scrollRef.current) return;

    const scrollTop = scrollRef.current.scrollTop;
    if (scrollTop === 0) {
      const distance = e.touches[0].clientY - startYRef.current;
      if (distance > 0) {
        setPullDistance(Math.min(distance, 100));
      }
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance > 50 && !isRefreshing) {
      setIsRefreshing(true);
      setPullDistance(0);
      if (onRefresh) {
        await onRefresh();
      }
      setIsRefreshing(false);
    } else {
      setPullDistance(0);
    }
  };

  return (
    <div
      ref={scrollRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="overflow-y-auto h-full relative"
    >
      {/* Pull-to-refresh indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 flex items-center justify-center pt-4 z-40 pointer-events-none md:hidden"
        style={{
          height: pullDistance,
          opacity: Math.min(pullDistance / 50, 1),
        }}
      >
        <motion.div
          animate={{ rotate: isRefreshing ? 360 : 0 }}
          transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
        >
          <RotateCw className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Main content with padding when pulling */}
      <motion.div
        style={{
          paddingTop: Math.max(0, pullDistance - 10),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}