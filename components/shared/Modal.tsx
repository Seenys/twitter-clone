// React imports
import React, { ReactElement, FC, useCallback } from "react";
// Icons
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  title = "Modal",
  body,
  footer,
  actionLabel,
  disabled,
  onClose,
  onSubmit,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) return;

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800
        bg-opacity-50
    "
      >
        <div
          className="
        relative
        w-full
        h-full
        my-6
        mx-auto
        lg:w-3/6
        lg:h-auto
        lg:max-w-3xl
        "
        >
          {/** Modal content */}
          <div
            className="
            h-full
            lg:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-black
            outline-none
            focus:outline-none
            "
          >
            {/** Modal header */}
            <div
              className="
                flex
                items-center
                justify-between
                p-10
                rounded-t"
            >
              <h3
                className="
                    text-3xl
                    font-semibold
                    text-white"
              >
                {title}
              </h3>
              <button
                onClick={handleClose}
                className="
                    p-1
                    ml-auto
                    border-0
                    text-white
                    hover:opacity-70
                    transition
                "
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/** Modal body */}
            <div className="relative p-10 flex-auto">{body}</div>
            {/** Modal footer */}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
