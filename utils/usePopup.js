import { useState } from 'react';

export const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.addEventListener('click', closeMenu);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.removeEventListener('click', closeMenu);
  };
  return [isOpen, setOpen];
};
