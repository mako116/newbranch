'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Badge,
} from '@chakra-ui/react'
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import logo from "../../../public/assest/images/9milebannerlogo.png"
import { LuUsers } from 'react-icons/lu'
import { BsPersonGear, BsSliders2 } from 'react-icons/bs'
import { PiCreditCardLight, PiUsersThree } from 'react-icons/pi'
import { AiOutlineException } from 'react-icons/ai'
import { MdOutlineLogout } from 'react-icons/md'
import { useState } from 'react'
import Link from 'next/link';

import Navbar from '../Navbar/Navbar'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
  isLogout?: boolean
  isHome?: boolean
  isActive?: boolean
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps & { href: string }> = [
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Guarantees', icon: LuUsers, href: '/Guarantees' },
  { name: 'Loans', icon: BsSliders2, href: '/loans' },
  { name: 'Cards', icon: PiCreditCardLight, href: '/cards' },
  { name: 'Beneficiaries', icon: PiUsersThree, href: '/beneficiaries' },
  { name: 'Transactions', icon: AiOutlineException, href: '/transactions' },
  { name: 'Profile Settings', icon: BsPersonGear, href: '/profile-settings' },
  { name: 'Logout', icon: MdOutlineLogout, href: '/logout' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string>('Home')

  return (
    <Box
    transition="3s ease"
    bg={useColorModeValue('white', 'gray.900')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Image src={logo.src} alt="Example Image" />
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    {LinkItems.map((link) => (
      <NavItem
        key={link.name}
        icon={link.icon}
        isLogout={link.name === 'Logout'}
        isHome={link.name === 'Home'}
        isActive={activeItem === link.name}
        href={link.href}
        onClick={() => setActiveItem(link.name)}
      >
        {link.name}
      </NavItem>
    ))}
  </Box>
  )
}

const NavItem = ({ icon, children, isLogout, isHome, isActive, href, ...rest }: NavItemProps & { href: string }) => {
  return (
    <Link href={href} passHref>
      <Box
        as="a"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        {...rest}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          // Remove background color
          // bg={isActive ? '#5586FF' : 'transparent'}
          // color={isActive ? 'white' : '#5586FF'}
        >
          {icon && (
            <Icon
              mr="4"
              fontFamily="Poppins"
              fontWeight="600"
              fontSize="16"
              lineHeight="21px"
              as={icon}
              color={isLogout ? '#FC6767' : (isActive ? '#5586FF' : '#9E9E9E')} // Keep isLogout color fixed
            />
          )}
          <Text
            fontWeight="600"
            fontSize="16"
            lineHeight="21px"
            color={isLogout ? '#FC6767' : (isActive ? '#5586FF' : '#9E9E9E')} // Keep isLogout color fixed
          >
            {children}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    className='bg-[#F7F7F7]'
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent={{ base: 'space-between'}}
    {...rest}
  >
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />

<Text
    display={{ base: 'flex',}} // Hide on mobile, show on medium and larger screens
    fontSize={{ base: 'lg', md: '2xl' }} // Responsive font size
    fontFamily="monospace"
    fontWeight="bold"
    ml={{ base: 0, md: 4 }} // Add margin-left if needed for spacing
    mr={{ base: 0, md: 8 }} // Margin-right for spacing on larger screens
  >
    Hello David 👋🏾
  </Text>

    <HStack spacing={{ base: '0', md: '6' }}>
      <Navbar/>
      <Box position="relative">
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="notifications"
          icon={<FiBell />}
        />
        <Badge
          position="absolute"
          top="4"
          right="5"
          transform="translate(50%, -50%)"
         bg="#FC6767"
         color="white"
          borderRadius="full"
          px="1"
          py="1"
          fontSize="0.75rem"
          fontWeight="bold"
        >
          
        </Badge>
      </Box>
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack>
              <Avatar
                size={'sm'}
                src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
              />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">Justina Clark</Text>
                <Text fontSize="xs" color="gray.600">
                  Admin@gmail.com
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  </Flex>
  )
}

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
    </Box>
  )
}

export default SidebarWithHeader
