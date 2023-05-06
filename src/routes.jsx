import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Celebrity Request",
        path: "/celebrity",
        element: <Tables />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Sponsored Events",
        path: "/events",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Reports",
        path: "/reports",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Block User",
        path: "/block-list",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Support",
        path: "/support",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Setting",
        path: "/settings",
        element: <Notifications />,
      },
    ],
  },
  {
    // title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
        keys: "auth",
      },
      // {
      //   icon: <UserPlusIcon {...icon} />,
      //   name: "sign up",
      //   path: "/sign-up",
      //   element: <SignUp />,
      //   keys: 'auth'
      // },
    ],
  },
];

export default routes;
