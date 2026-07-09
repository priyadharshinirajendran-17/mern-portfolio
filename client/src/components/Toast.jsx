import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

const Toast = ({ message, type = "success", onClose }) => {
  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10 }}
      className="glass-card flex items-center gap-3 px-4 py-3 pr-2 min-w-[260px] max-w-sm"
      role="status"
    >
      {isSuccess ? (
        <FiCheckCircle className="shrink-0 text-accent" size={20} />
      ) : (
        <FiXCircle className="shrink-0 text-red-400" size={20} />
      )}
      <p className="text-sm text-text-primary">{message}</p>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="ml-auto shrink-0 rounded-full p-1 text-text-muted hover:text-text-primary"
      >
        <FiX size={16} />
      </button>
    </motion.div>
  );
};

export default Toast;
