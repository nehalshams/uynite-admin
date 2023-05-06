import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Tables } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import { Auth } from "./layouts";

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
        element: <div>Sponsored Event</div>,
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
        element: <div></div>,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Support",
        path: "/support",
        element: <div>Block user</div>,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Setting",
        path: "/settings",
        element: <div>Settings</div>,
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
        path: "/auth",
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
