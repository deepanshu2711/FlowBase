import { useState, useCallback } from "react";

export function useDialog(initialState = false) {
  const [open, setOpen] = useState(initialState);

  const openDialog = useCallback(() => setOpen(true), []);
  const closeDialog = useCallback(() => setOpen(false), []);
  const toggleDialog = useCallback(() => setOpen((prev) => !prev), []);

  return {
    open,
    setOpen,
    openDialog,
    closeDialog,
    toggleDialog,
  };
}
