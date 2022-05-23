import { FC, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { CobrandsAPI } from '~/utilities/api';
import { generateSlug } from '~/utilities/slug';

interface FormData {
  name: string;
  slug: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCobrandDialog: FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('cobrand');
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const watchName = watch('name');
  useEffect(() => {
    watchName && setValue('slug', generateSlug(watchName));
  }, [watchName]);

  const doSubmit = (values: FormData) => {
    CobrandsAPI.create(values);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('operations.create')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={!!errors.name?.message}>
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            <FormLabel htmlFor="name">{t('create.name')}</FormLabel>
            <Input
              {...register('name', {
                required: t('errors.required'),
                minLength: { value: 4, message: t('errors.nameTooShort') }
              })}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.slug?.message}>
            <FormErrorMessage>{errors.slug?.message}</FormErrorMessage>
            <FormLabel htmlFor="slug">{t('create.slug')}</FormLabel>
            <Input
              {...register('slug', {
                required: t('errors.required')
              })}
              disabled
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit(doSubmit)}>
            {isSubmitting ? <Spinner /> : t('operations.save')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
