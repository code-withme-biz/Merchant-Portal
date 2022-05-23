import { FC } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Circle,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import SvgIcon from '~/components/SvgIcon';
import { bellSvg, searchSvg } from '~/ions/icons';
import { NavigationLink } from '~/ions/navigation';
import { NavCaption } from '~/components/typography';
import { HamburgerIcon } from '@chakra-ui/icons';

const fakeBreadcrumbs: NavigationLink[] = [
  { href: '/merchants', caption: 'Merchants' },
  { href: '/merchants/345-678-012', caption: 'Merchant Application 345-678-012' }
];

interface HeaderProps {
  showHamburgerButton: boolean;
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ showHamburgerButton, toggleSidebar }) => (
  <Grid templateColumns="repeat(12, 1fr)" pt="20px" gridRowGap={2}>
    <GridItem colSpan={[12, 12, 12, 6]}>
      <Breadcrumb separator={<NavCaption color="gray.400">&gt;</NavCaption>}>
        {fakeBreadcrumbs.map((item, key) => (
          <BreadcrumbItem key={key}>
            <BreadcrumbLink href={item.href}>
              <NavCaption color="gray.400">{item.caption}</NavCaption>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </GridItem>
    <GridItem colSpan={[12, 12, 12, 6]}>
      <Flex>
        <InputGroup>
          <Input placeholder="What are you looking for?" borderRadius={100} bgColor="white" />
          <InputRightElement pointerEvents="none">
            <SvgIcon color="gray.400">{searchSvg}</SvgIcon>
          </InputRightElement>
        </InputGroup>
        {showHamburgerButton && (
          <HamburgerIcon
            onClick={() => toggleSidebar()}
            w="20px"
            h="20px"
            color="gray.400"
            ml="10px"
            mt="8px"
          />
        )}
        <Circle
          size="40px"
          bg="white"
          border="1px"
          pl="20px"
          ml="14px"
          position="relative"
          borderColor="gray.200"
        >
          <SvgIcon>{bellSvg}</SvgIcon>
          <Circle size="7px" bg="red" position="absolute" bottom="10px" right="9px" />
        </Circle>
        <Circle size="36px" color="blue.500" ml="14px" bgColor="rgba(81, 96, 228, 0.1)">
          <Text variant="navigation">AC</Text>
        </Circle>
      </Flex>
    </GridItem>
  </Grid>
);

export default Header;
