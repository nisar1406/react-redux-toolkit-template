import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../app/store/modalSlice';
// import AddLeadModalBody from '../features/leads/components/AddLeadModalBody';
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody';
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil';

interface ModalLayoutProps {}

const ModalLayout: React.FC<ModalLayoutProps> = () => {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const close = (e: React.MouseEvent) => {
    dispatch(closeModal(e));
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => close}
          >
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

          {/* Loading modal body according to different modal type */}
          {
            {
              // [MODAL_BODY_TYPES.LEAD_ADD_NEW]: <AddLeadModalBody closeModal={close} extraObject={extraObject} />,
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType] as JSX.Element // Add 'as JSX.Element' for type assertion
          }
        </div>
      </div>
    </>
  );
};

export default ModalLayout;
