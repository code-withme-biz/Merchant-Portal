import { FC } from 'react';
import {
  Drawer,
  Box,
  Image,
  VStack,
  Text,
  Link,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton
} from '@chakra-ui/react';
import logo from '~/assets/images/logo--rgb.png';
import { sidebarMenuItems, NavigationLink } from '~/ions/navigation';
import { useLocation } from 'react-router-dom';
import SvgIcon from '~/components/SvgIcon';
import { SIDEBAR_WIDTH } from '~/ions/themes/sidebarOverrides';

const SidebarLogo: FC = () => <Image src={logo} htmlWidth={123} alt="logo" mb="34px" />;

const getMenuItemColor = (active: boolean) => (active ? 'white' : 'gray.400');

const SidebarMenuItem: FC<NavigationLink> = ({ href, caption, active = false, iconSvg }) => (
  <Text variant="navigation" color={getMenuItemColor(active)} h="40px" mb="6px" as="div">
    <Link href={href} variant={active ? 'sidebarSolid' : 'sidebar'}>
      <SvgIcon color={getMenuItemColor(active)}>{iconSvg}</SvgIcon>
      {caption}
    </Link>
  </Text>
);

const SidebarMenu: FC = () => {
  const { pathname } = useLocation();
  return (
    <VStack alignItems="start">
      {sidebarMenuItems.map((item, key) => (
        <SidebarMenuItem {...item} active={pathname === item.href} key={key} />
      ))}
    </VStack>
  );
};

interface SidebarProps {
  permanent?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ permanent = true, isOpen = false, onClose = () => null }) =>
  permanent ? (
    <Box
      position="fixed"
      left={0}
      top={0}
      w={SIDEBAR_WIDTH + 'px'}
      h="100%"
      p={5}
      borderRight="1px"
      borderColor="gray.200"
    >
      <SidebarLogo />
      <SidebarMenu />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <SidebarLogo />
        </DrawerHeader>
        <DrawerBody>
          <SidebarMenu />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

export default Sidebar;
