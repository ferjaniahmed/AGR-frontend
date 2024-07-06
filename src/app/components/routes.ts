declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
  }
  export const CLIENT_ROUTES: RouteInfo[] = [
    {
      path: "user-profile",
      title: "User profile",
      icon: "bi-person-fill",
      class: "",
    },
    {
      path: "home",
      title: "Home",
      icon: "bi-house-door-fill",
      class: "",
    },
    {
        path: "order",
        title: "Order",
        icon: "bi-bag-fill",
        class: "",
    },
    {
        path: "shop",
        title: "Shop",
        icon: "bi-cart-fill",
        class: "",
      },

  ];

  export const ADMIN_ROUTES: RouteInfo[] = [
    {
      path: "user-profile",
      title: "User profile",
      icon: "ni-single-02 text-yellow",
      class: "",
    },
    {
      path: "home",
      title: "Home",
      icon: "ni-bullet-list-67 text-red",
      class: "",
    },
    {
        path: "order",
        title: "Order",
        icon: "ni-bullet-list-67 text-red",
        class: "",
    },
    {
        path: "shop",
        title: "Shop",
        icon: "ni-bullet-list-67 text-red",
        class: "",
    },
    {
        path: "dashboard",
        title: "Dashboard",
        icon: "ni-tv-2 text-primary",
        class: "",
    },
    {
        path: "tables",
        title: "Tables",
        icon: "ni-bullet-list-67 text-red",
        class: "",
      },
      {
        path: "icons", //complete URL
        title: "Icons",
        icon: "ni-planet text-blue",
        class: "",
    },
    {
        path: "maps",
        title: "Maps",
        icon: "ni-pin-3 text-orange",
        class: "",
    },

  ];