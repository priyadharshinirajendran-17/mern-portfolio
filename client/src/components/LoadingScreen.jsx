import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-bg">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-accent" />
      </div>
    </div>
  );
};

export default LoadingScreen;
