import { FC, useCallback, useMemo, useState } from 'react';
import { Button, Flex, Grid, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Column } from 'react-table';

import { DataTable } from '~/components';
import { ConfirmationModal } from '~/components/organisms';
import { CreateCobrandDialog } from './CreateCobrandDialog';
import { TransferCobrandDialog } from './TransferCobrandDialog';
import { Headline2 } from '~/components/typography';
import { CobrandsAPI } from '~/utilities/api';

export type Cobrand = {
  id: number;
  slug: string;
  name: string;
  clientId: number;
  disabled?: boolean;
};

const mockCobrands: Cobrand[] = [
  { id: 1, slug: 'sarah', name: 'Sarah', clientId: 52 },
  { id: 2, slug: 'cobrand-one', name: 'Cobrand One', clientId: 53, disabled: true }
];

const CobrandList: FC = () => {
  const { t } = useTranslation('cobrand');
  const [selected, setSelected] = useState<Cobrand | null>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDisableOpen, onOpen: onDisableOpen, onClose: onDisableClose } = useDisclosure();
  const {
    isOpen: isActivateOpen,
    onOpen: onActivateOpen,
    onClose: onActivateClose
  } = useDisclosure();
  const {
    isOpen: isTransferOpen,
    onOpen: onTransferOpen,
    onClose: onTransferClose
  } = useDisclosure();

  const openCobrandModal = useCallback((cobrand: Cobrand, openDialog: () => void) => {
    setSelected(cobrand);
    openDialog();
  }, []);

  const transfer = (clientId: number) => {
    selected && CobrandsAPI.transfer(selected.id, clientId);
    onTransferClose();
  };

  const disable = () => {
    selected && CobrandsAPI.disable(selected.id);
    onDisableClose();
  };

  const activate = () => {
    selected && CobrandsAPI.activate(selected.id);
    onActivateClose();
  };

  const data: Cobrand[] = useMemo(() => mockCobrands, []);
  const columns: Column<Cobrand>[] = useMemo(
    () => [
      { Header: t('columns.id'), accessor: 'id' },
      { Header: t('columns.name'), accessor: 'name' },
      {
        Header: t('columns.actions'),
        Cell: ({
          cell: {
            row: { original }
          }
        }: {
          cell: { row: { original: Cobrand } };
        }) => (
          <Grid templateColumns="repeat(2, 1fr)" gap={2} minW={'xs'}>
            <Button colorScheme="gray" onClick={() => openCobrandModal(original, onTransferOpen)}>
              {t('operations.transfer')}
            </Button>
            {original.disabled ? (
              <Button colorScheme="gray" onClick={() => openCobrandModal(original, onActivateOpen)}>
                {t('operations.activate')}
              </Button>
            ) : (
              <Button colorScheme="red" onClick={() => openCobrandModal(original, onDisableOpen)}>
                {t('operations.disable')}
              </Button>
            )}
          </Grid>
        )
      }
    ],
    []
  );

  return (
    <>
      <Flex justifyContent={'space-between'}>
        <Headline2>{t('cobrandsHeading')}</Headline2>
        <Button onClick={onOpen}>{t('operations.create')}</Button>
        <CreateCobrandDialog isOpen={isOpen} onClose={onClose} />
        <TransferCobrandDialog
          isOpen={isTransferOpen}
          onClose={onTransferClose}
          cobrandName={selected?.name || ''}
          onSubmit={transfer}
        />
        <ConfirmationModal
          isOpen={isDisableOpen}
          onConfirm={disable}
          onClose={onDisableClose}
          confirmText={t('disable.disableConfirmation')}
          header={t('disable.title')}
          message={t('disable.message', { cobrandName: selected?.name })}
        />
        <ConfirmationModal
          isOpen={isActivateOpen}
          onConfirm={activate}
          onClose={onActivateClose}
          confirmText={t('activate.activateConfirmation')}
          header={t('activate.title')}
          message={t('activate.message', { cobrandName: selected?.name })}
        />
      </Flex>

      <DataTable columns={columns} data={data} />
    </>
  );
};

export default CobrandList;
