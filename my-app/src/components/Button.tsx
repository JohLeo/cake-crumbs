// NoButton.tsx
import React, { useEffect } from 'react';
import { NopeButton } from './style/darling-style';


interface NoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NoButton: React.FC<NoButtonProps> = ({ onClick, children }) => {
  useEffect(() => {
    const OFFSET = 100;
    const noButton = document.getElementById('no-button') as HTMLButtonElement | null;

    const setButtonPosition = (left: number, top: number) => {
      const windowBox = document.body.getBoundingClientRect();
      const noButton = document.getElementById('no-button') as HTMLButtonElement | null;

      if (noButton) {
        const buttonBox = noButton.getBoundingClientRect();

        if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
          left = windowBox.right - buttonBox.width - OFFSET;
        }
        if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
          left = windowBox.left - buttonBox.width + OFFSET;
        }
        if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
          top = windowBox.bottom - buttonBox.height - OFFSET;
        }
        if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
          top = windowBox.top - buttonBox.height + OFFSET;
        }

        noButton.style.left = `${left}px`;
        noButton.style.top = `${top}px`;
      }
    };

    function distanceFromCenter(boxPosition: number, mousePosition: number, boxSize: number) {
      return boxPosition - mousePosition + boxSize / 2;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;
      const buttonBox = noButton?.getBoundingClientRect();

      if (buttonBox) {
        const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
        const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);

        const horizontalOffset = buttonBox.width / 2 + OFFSET;
        const verticalOffset = buttonBox.height / 2 + OFFSET;
        if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
          setButtonPosition(
            buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
            buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10
          );
        }
      }
    };

    const handleClick = () => {
      alert('Nehepp');
      window.close();
    };

    if (noButton) {
      noButton.addEventListener('click', handleClick);
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return undefined;
  }, []);

  return (
    <NopeButton id="no-button" onClick={onClick}>
      {children}
    </NopeButton>
  );
};

export default NoButton;
