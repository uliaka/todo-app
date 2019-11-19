import React from 'react';
import './ModalDialog.scss';

const ModalDialog = (props) => (
    <dialog
      open={true}
      onClose={props.onCancel}
      aria-labelledby="alert-dialog-title"
    >
      <h2 id="alert-dialog-title">{props.message}</h2>
        <div onClick={props.onCancel}>
          <span>{props.cancelText}</span>
        </div>
        <div onClick={props.onConfirm}>
          <span>{props.confirmText}</span>
        </div>
    </dialog>
);

export default ModalDialog;