import React from "react";
import { ModalBody } from "reactstrap";
import { Modal, TextLg, TextSm } from "./appmodal.styles";
import AppImage from "../../atoms/AppImage/appimage.atom";
import IProps from "./appmodal.interfaces";

const AppModal: React.FunctionComponent<IProps> = ({ config }) => {
  const {
    modalClassName, modalImage, modalDescription, modalTitle,
  } = config;

  return (
    <Modal className={modalClassName}>
      <ModalBody>
        <AppImage config={{ imageSrc: modalImage }} />
        <TextLg>{modalTitle}</TextLg>
        <TextSm>{modalDescription}</TextSm>
      </ModalBody>
    </Modal>
  );
};

export default AppModal;
