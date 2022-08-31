import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";
import { IModalProps } from "components/types/types";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export class Modal extends Component<IModalProps, {}> {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    setTimeout(() => {
      window.addEventListener("click", this.handleBackdropClick);
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("click", this.handleBackdropClick);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event: MouseEvent) => {
    const target = event.target as Element;

    if (target.nodeName !== "IMG") {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
