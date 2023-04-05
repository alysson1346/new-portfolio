import { ModalContainer, ModalBody, DivCloseModal, Title } from "./styled";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { Button } from "../button";

export const MyModal = ({
  isOpen,
  onClose,
  title,
  description,
  haveDeploy,
  link,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <ModalContainer>
          <ModalBody>
            <DivCloseModal>
              <button onClick={onClose}>X</button>
            </DivCloseModal>
            <Title black="true">{title}</Title>
            <p>{description}</p>

            {haveDeploy ? (
              <div className="btns">
                <Button
                  color="btn1"
                  onClick={() => {
                    const linkDeploy = link[0].deploy;
                    window.open(linkDeploy, "_blank");
                  }}
                >
                  Deploy
                </Button>
                <Button
                  onClick={() => {
                    const linkGitHub = link[1].github;
                    window.open(linkGitHub, "_blank");
                  }}
                >
                  Github
                </Button>
              </div>
            ) : (
              <div className="btns">
                <Button
                  onClick={() => {
                    const linkGitHub = link[1].github;
                    window.open(linkGitHub, "_blank");
                  }}
                >
                  Github
                </Button>
              </div>
            )}
          </ModalBody>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
