const SIDEBAR_WIDTH = 200;

const sidebarOverrides = {
  Drawer: {
    baseStyle: {
      header: {
        px: 22
      }
    },
    sizes: {
      xs: {
        dialog: {
          maxW: SIDEBAR_WIDTH
        }
      }
    }
  }
};

export default sidebarOverrides;
export { SIDEBAR_WIDTH };
