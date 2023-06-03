import React from 'react';
import { Dialog, TextField, Button } from '@bigtincan/react-design-system';

const Modal: React.FC<any> = ({ isShowingDialog, value, setValue, closeDialog }): JSX.Element => {
  return (
    <Dialog isOpen={isShowingDialog} size='medium'>
      <Dialog.Header>Header</Dialog.Header>
      <Dialog.Body>
        <TextField
          autoFocus
          placeholder=''
          label='Label'
          showOptionalityIndicator='required'
          required={true}
          style={{ width: '100%' }}
          i18n='startMeetingModal.meetingNameInputLabel'
          value={value}
          onChange={setValue}
        />
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.FooterButtonWrapper>
          <Button color='tint' onClick={closeDialog}>
            Cancel
          </Button>
        </Dialog.FooterButtonWrapper>
      </Dialog.Footer>
    </Dialog>
  );
};

export default Modal;
