import { FC, useState } from 'react';
import { Box, Container, Divider, Heading, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import Sidebar from '~/components/layout/Sidebar';
import { SIDEBAR_WIDTH } from '~/ions/themes/sidebarOverrides';
import Header from '~/components/layout/Header';

export const SystemLayout: FC = () => {
  const { t } = useTranslation('system');
  const notMobile = useBreakpointValue({ base: false, md: true });
  const [mobileSidebarOpened, setMobileSidebarOpened] = useState(false);

  return (
    <>
      <Sidebar
        permanent={notMobile}
        isOpen={mobileSidebarOpened}
        onClose={() => setMobileSidebarOpened(false)}
      />
      <Box ml={notMobile ? SIDEBAR_WIDTH : 0} bg="#F7F9FF" h="100%" minH="100%">
        <Container maxWidth="1440">
          <Header
            showHamburgerButton={!notMobile}
            toggleSidebar={() => setMobileSidebarOpened(!mobileSidebarOpened)}
          />
          <Spacer h={4} />

          <Heading>{t('heading')}</Heading>

          <Spacer h={4} />
          <Divider />
          <Spacer h={2} />

          <Spacer h={2} />
          <Divider />
          <Spacer h={8} />

          <Outlet />
        </Container>
      </Box>
    </>
  );
};
