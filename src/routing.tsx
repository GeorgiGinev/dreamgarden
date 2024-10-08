import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'bg'],
  defaultLocale: 'en',
 
  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    '': '',
    '/home': '/home',
    '/askUs': '/askUs',
    '/contacts': '/contacts',
    '/aboutUs': '/aboutUs',
    '/aboutUs/garden': '/aboutUs/garden',
    '/aboutUs/happyClients': '/aboutUs/happyClients',
    '/aboutUs/partners': '/aboutUs/partners',
    '/virtualTour': '/virtualTour',
    '/gallery': '/gallery',
    '/services': '/services',
    '/services/weddings': '/services/weddings',
    '/services/teambuilding': '/services/teambuilding',
    '/services/parties': '/services/parties'
  }
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation(routing);