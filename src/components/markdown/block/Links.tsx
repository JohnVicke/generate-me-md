import { DefaultModal } from "@/components/modals/DefaultModal";
import React from "react";

const EditLinksModal = () => {
  return <div className="bg-neutral">edit modal</div>;
};

const Links = () => (
  <div className="align-center flex justify-center gap-2">
    <a className="font-bold text-blue-400">Contribute</a>
    <span>·</span>
    <a className="font-bold text-blue-400">Community</a>
    <span>·</span>
    <a className="font-bold text-blue-400">Documentation</a>
  </div>
);

export const LinksController = ({}) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div onClick={() => setModalOpen(true)} className="cursor-pointer hover:border hover:border-white">
        <Links />
      </div>
      <DefaultModal open={modalOpen} close={closeModal}>
        <EditLinksModal />
      </DefaultModal>
    </>
  );
};
