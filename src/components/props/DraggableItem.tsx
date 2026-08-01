import { useRef, type ReactNode, type RefObject } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "../global/Tooltip";

interface DraggableItemProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  constraintsRef?: RefObject<HTMLElement | null>;
  onActivate?: () => void;
  tooltip?: string;
  styling?: string;
  tooltipPos?: "top" | "bottom" | "left" | "right";
  initialRotate?: number;
}

/**
 * Wraps a desk prop so it can be dragged around the hero freely, while still
 * supporting a click/tap action (lamp -> theme toggle, phone -> scroll to
 * contact) without the drag gesture accidentally firing it. Positioning goes
 * on the outer (static) wrapper; the inner motion.div only ever moves via
 * drag transforms, so the two never fight each other.
 */
export function DraggableItem({
  children,
  className = "",
  style,
  constraintsRef,
  onActivate,
  tooltip,
  tooltipPos,
  styling,
  initialRotate = 0,
}: DraggableItemProps) {
  const wasDragged = useRef(false);

  const draggable = (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.06, zIndex: 40 }}
      dragConstraints={constraintsRef}
      onDragStart={() => {
        wasDragged.current = true;
      }}
      onClick={() => {
        if (wasDragged.current) {
          wasDragged.current = false;
          return;
        }
        onActivate?.();
      }}
      initial={{ rotate: initialRotate }}
      whileHover={{ scale: onActivate ? 1.04 : 1.02 }}
      data-cursor={onActivate ? "pointer" : "grab"}
      className="select-none"
    >
      {tooltip ? (
        <Tooltip label={tooltip} side={tooltipPos} styling={styling}>
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </motion.div>
  );

  return (
    <div className={`absolute ${className}`} style={style}>
      {draggable}
    </div>
  );
}
