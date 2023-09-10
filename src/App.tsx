import React, { useState, useEffect } from 'react';

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Calculate the initial position to center the box
    const centerX = window.innerWidth / 2 - 400; // Half the box width (600px)
    const centerY = window.innerHeight / 2 - 200; // Half the box height (400px)

    setPosition({ x: centerX, y: centerY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const rectangleStyle: React.CSSProperties = {
    // width: '700px',
    // height: '400px',
    backgroundColor: 'blue',
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    cursor: 'pointer',
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-gray-200"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={rectangleStyle}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default Home;
  