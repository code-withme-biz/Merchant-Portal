import { ResourceLanguage } from 'i18next';

export interface Locale extends ResourceLanguage {
  auth: {
    common: {
      [k in 'askEmail']: string;
    };
    signIn: {
      [k in 'emailRequired' | 'invalidEmail']: string;
    };
  };
  common: {
    [k in 'administrator' | 'admin']: string;
  } & {
    actions: {
      [k in 'confirm' | 'cancel' | 'delete']: string;
    };
  };
  system: {
    heading: string;
  };
  client: {
    heading: string;
    tabs: {
      [k in 'cobrands' | 'users' | 'submerchantDashboards']: string;
    };
  };
  cobrand: {
    cobrandsHeading: string;
    columns: {
      [k in 'id' | 'actions' | 'name']: string;
    };
    operations: {
      [k in 'create' | 'transfer' | 'disable' | 'activate' | 'save']: string;
    };
    create: {
      [k in 'name' | 'slug']: string;
    };
    transfer: {
      [k in 'title' | 'client' | 'chooseClient' | 'message']: string;
    };
    disable: {
      [k in 'title' | 'disableConfirmation' | 'message']: string;
    };
    activate: {
      [k in 'title' | 'activateConfirmation' | 'message']: string;
    };
    errors: {
      [k in 'required' | 'nameTooShort']: string;
    };
  };
  notFound: {
    [k in 'heading' | 'goHome']: string;
  };
}
