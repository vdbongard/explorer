import { RefObject, useEffect, useState } from 'react';

function isSameOrChildNode(node1: Node, node2: Node): boolean {
  return node1 === node2 || node1.contains(node2);
}

export function useMiddleClick(ref: RefObject<HTMLElement>, cb: () => void): void {
  const [middleMouseDown, setMiddleMouseDown] = useState(false);

  useEffect((): (() => void) => {
    const onMouseDown = (e: MouseEvent): void => {
      if (e.button === 1 && ref.current && isSameOrChildNode(ref.current, e.target as Node)) {
        e.preventDefault();
        setMiddleMouseDown(true);
      } else {
        setMiddleMouseDown(false);
      }
    };

    const onMouseUp = (e: MouseEvent): void => {
      if (e.button !== 1) return;
      if (!middleMouseDown) return;
      if (!ref.current) return;
      if (!isSameOrChildNode(ref.current, e.target as Node)) return;

      setMiddleMouseDown(false);
      e.stopPropagation();
      cb();
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return (): void => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [middleMouseDown, ref, cb]);
}
