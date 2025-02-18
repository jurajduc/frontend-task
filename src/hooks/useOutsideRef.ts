import { RefObject, useRef } from 'react';

/**
 * Allows a component to safely use an optional ref, which is provided from the outside.
 * If no such ref is provided, an internal one is used and provided.
 *
 * @param outsideRef - The ref-object, which comes from the outside
 * @returns outsideRef, if defined, otherwise a defined ref-object
 */
export default function useOutsideRef<T>(outsideRef?: RefObject<T>, defValue: T | null = null) {
  const ownRef = useRef<T>(defValue);
  return outsideRef ?? ownRef;
}
