import { useState, type FC, type ReactNode } from "react";

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: Position) => ReactNode;
}

const MouseTracker: FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <>
      <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
        {render(position)}
      </div>
    </>
  );
};

export default MouseTracker;
