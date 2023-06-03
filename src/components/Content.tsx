import React, { useState } from 'react';
import { Button } from '@bigtincan/react-design-system';
import Modal from './Modal';

const Content: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isShowingDialog, setIsShowingDialog] = useState<boolean>(false);

  const closeDialog = () => {
    setValue('');
    setIsShowingDialog(false);
  };

  return (
    <>
      <Button color='tint' onClick={() => setIsShowingDialog(true)}>
        Open modal
      </Button>
      <Modal isShowingDialog={isShowingDialog} value={value} setValue={setValue} closeDialog={closeDialog} />
    </>
  );
};

export default Content;
