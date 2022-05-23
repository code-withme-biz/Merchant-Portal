import { FC } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

type SystemClient = {
  id: number;
  slug: string;
  name: string;
  numberOfCoBrands: number;
};

const mockSystemClients: SystemClient[] = [
  { id: 52, slug: 'client-for-sarah', name: 'ClientForSarah', numberOfCoBrands: 7 },
  { id: 53, slug: 'client-one', name: 'Client One', numberOfCoBrands: 2 }
];

interface FormData {
  clientId: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cobrandName: string;
  onSubmit: (clientId: number) => void;
}

export const TransferCobrandDialog: FC<Props> = ({ isOpen, onClose, cobrandName, onSubmit }) => {
  const { t } = useTranslation('cobrand');
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const doSubmit = (values: FormData) => {
    onSubmit(values.clientId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('transfer.title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{t('transfer.message', { cobrandName })}</p>
          <FormControl isInvalid={!!errors.clientId?.message}>
            <FormErrorMessage>{errors.clientId?.message}</FormErrorMessage>
            <Select
              {...register('clientId', {
                required: t('errors.required')
              })}
            >
              <option value="">{t('transfer.chooseClient')}</option>
              {mockSystemClients.map((item, key) => (
                <option value={item.id} key={key}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit(doSubmit)}>
            {isSubmitting ? <Spinner /> : t('operations.transfer')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
