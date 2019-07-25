import { RefObject, useRef, useState } from 'react';

export function useDrag<T extends HTMLElement, U extends HTMLElement>(
  dragRef: RefObject<T>,
  parentRef: RefObject<U>,
  setPos: (pos: [number, number]) => void
): void {
  const [moving, setMoving] = useState(false);
  const offset = useRef([0, 0]);

  if (!dragRef.current) return;

  const onPointerMove = (e: PointerEvent): void => {
    setPos([e.clientX - offset.current[0], e.clientY - offset.current[1]]);
  };

  const onPointerUp = (): void => {
    document.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointermove', onPointerMove);
    setMoving(false);
  };

  dragRef.current.onpointerdown = (e: PointerEvent): void => {
    if (moving) return;
    setMoving(true);
    if (parentRef.current) {
      const { offsetLeft, offsetTop } = parentRef.current;
      const { clientX, clientY } = e;
      offset.current = [clientX - offsetLeft, clientY - offsetTop];
    }
    document.addEventListener('pointerup', onPointerUp);
    document.addEventListener('pointermove', onPointerMove);
  };
}
