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
import Events from "./pages/dashboard/Events";
import CreateEvent from "./pages/events/CreateEvent";
import Report from "./pages/report/Report";
import Celebrity from "./pages/celebrity/Celebrity";
import Support from "./pages/Support/Support";
import Setting from "./pages/settings/Setting";
import Block from "./pages/block/Block";

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
        element: <Celebrity />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Sponsored Events",
        path: "/events",
        element: <Events />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Reports",
        path: "/reports",
        element: <Report />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Block User",
        path: "/block-list",
        element: <Block/>,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Support",
        path: "/support",
        // element: <Support/>,
        element: <div>Support</div>
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Setting",
        path: "/settings",
        // element: <Setting/>,
        element: <div>Setting</div>

      },
      {
        icon: <BellIcon {...icon} />,
        name: "Create Event",
        path: "/create-event",
        element: <CreateEvent />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Create Event",
        path: "/dashboard/profile",
        element: <div>User Profile</div>,
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
