import React, {
  memo,
  useCallback,
  useEffect,
} from "react";

const Component = ({
  isEmpty,
  children,
  emptyComponent,
  onEndReached,
}) => {
  const _runFunc = useCallback(() => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight ===
      window.scrollY
    ) {
      onEndReached();
    }
  }, [onEndReached]);

  useEffect(() => {
    if (onEndReached) {
      window.addEventListener("scroll", _runFunc);
    }

    return () => {
      if (onEndReached) {
        window.removeEventListener("scroll", _runFunc);
      }
    };
  }, [_runFunc, onEndReached]);

  return isEmpty ? emptyComponent() : <>{children}</>;
};

Component.defaultProps = {
  isEmpty: false,
  emptyComponent: () => null,
  onEndReached: () => null,
};

export default memo(Component);
