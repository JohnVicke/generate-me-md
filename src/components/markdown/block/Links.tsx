import { DefaultModal } from "@/components/modals/DefaultModal";
import { Formik } from "formik";
import React from "react";

const LinkInput = () => {
  return (
    <div className="flex justify-between">
      <div>
        <label className="label">
          <span className="label-text">Link text</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Href</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full" />
      </div>
    </div>
  );
};

const EditLinksModal = () => {
  return (
    <Formik
      initialValues={{ link: "" }}
      validate={(values) => {
        if (!values.link) {
          return {
            errors: {
              link: "Required",
            },
          };
        }
        return {
          errors: {},
        };
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit }) => (
        <form className="form-control flex w-full flex-col gap-2 rounded-xl bg-neutral p-4" onSubmit={handleSubmit}>
          <div className="flex">
            <button type="submit" className="btn btn-error float-right">
              Discard
            </button>
            <button type="submit" className="btn btn-primary float-right">
              Save links
            </button>
          </div>
          <LinkInput />
        </form>
      )}
    </Formik>
  );
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
      <div>
        <Links />
      </div>
      <DefaultModal open={modalOpen} close={closeModal}>
        <EditLinksModal />
      </DefaultModal>
    </>
  );
};
