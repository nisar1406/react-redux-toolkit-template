import React from 'react';
import { useDispatch } from 'react-redux';

import { showNotification } from '../../../app/store/headerSlice';
import { CONFIRMATION_MODAL_CLOSE_TYPES } from '../../../utils/globalConstantUtil';
// import { deleteLead } from '../../leads/leadSlice';

interface ConfirmationModalBodyProps {
  extraObject: {
    message: string;
    type: CONFIRMATION_MODAL_CLOSE_TYPES;
    _id: string;
    index: number;
  };
  closeModal: () => void;
}

const ConfirmationModalBody: React.FC<ConfirmationModalBodyProps> = ({
  extraObject,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const { message, type } = extraObject;

  const proceedWithYes = async () => {
    if (type === CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE) {
      // positive response, call API or dispatch Redux function
      // dispatch(deleteLead({ index }));
      dispatch(showNotification({ message: 'Lead Deleted!', status: 1 }));
    }
    closeModal();
  };

  return (
    <>
      <p className="text-xl mt-8 text-center">{message}</p>

      <div className="modal-action mt-12">
        <button className="btn btn-outline" onClick={() => closeModal()}>
          Cancel
        </button>
        <button
          className="btn btn-primary w-36"
          onClick={() => proceedWithYes()}
        >
          Yes
        </button>
      </div>
    </>
  );
};

export default ConfirmationModalBody;
