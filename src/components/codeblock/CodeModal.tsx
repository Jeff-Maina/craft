import { FC } from "react";

interface ModalProps {
  isModalActive: boolean;
  codeBlock: {
    javascript: string;
    typescript: string;
  }
}

const CodeModal: FC<ModalProps> = ({isModalActive,codeBlock}) => {
  return <section></section>;
};

export default CodeModal;
