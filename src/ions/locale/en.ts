import { Locale } from './locale';

export const en: Locale = {
  auth: {
    common: {
      askEmail: 'What is your email address?'
    },
    signIn: {
      emailRequired: 'An email address is required.',
      invalidEmail: 'Please enter a valid email address.'
    }
  },
  common: {
    admin: 'admin',
    administrator: 'ADMINISTRATOR',
    actions: {
      confirm: 'Confirm',
      cancel: 'Cancel',
      delete: 'Delete'
    }
  },
  system: {
    heading: 'System Heading'
  },
  client: {
    heading: 'Clients Section',
    tabs: {
      cobrands: 'Cobrands',
      users: 'Users',
      submerchantDashboards: 'Submerchant Dashboards'
    }
  },
  cobrand: {
    cobrandsHeading: 'Cobrands',
    columns: {
      name: 'Name',
      id: 'Id',
      actions: 'Actions'
    },
    operations: {
      create: 'Create Cobrand',
      transfer: 'Transfer',
      disable: 'Disable',
      activate: 'Activate',
      save: 'Save'
    },
    create: {
      name: 'Name',
      slug: 'Slug'
    },
    transfer: {
      title: 'Transfer Cobrand',
      client: 'Client',
      chooseClient: 'Choose a client',
      message: 'Which client would you like to transfer {{cobrandName}} to?'
    },
    disable: {
      title: 'Disable Cobrand',
      disableConfirmation: 'Yes, disable',
      message: 'Are you sure you wish to disable the cobrand {{cobrandName}}?'
    },
    activate: {
      title: 'Activate Cobrand',
      activateConfirmation: 'Yes, activate',
      message: 'Are you sure you wish to activate the cobrand {{cobrandName}}?'
    },
    errors: {
      required: 'Required',
      nameTooShort: 'Should contain at least 4 symbols'
    }
  },
  notFound: {
    heading: 'Page Not Found',
    goHome: 'Go to Home'
  }
};
