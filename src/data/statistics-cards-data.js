import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Celebrity Request",
    path: '/dashboard/celebrity',
    value: "$53k",
    footer: [
      {
        color: "text-green-500",
        value: "11",
        label: "Pending",
      },
      {
        color: "text-green-500",
        value: "6",
        label: "Verified",
      },
      {
        color: "text-green-500",
        value: "6",
        label: "Rejected",
      },
    ],
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Sponsored Event",
    path: '/dashboard/events',
    value: "2,300",
    footer: [
      {
        color: "text-green-500",
        value: "66",
        label: "Completed",
      },
      {
        color: "text-green-500",
        value: "66",
        label: "Going on",
      },
    ],
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Report",
    path: '/dashboard/report',
    value: "3,462",
    footer: [
      {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    ],
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Support",
    path: "/dashboard/support",
    value: "$103,430",
    footer: [
      {
        color: "text-green-500",
        value: "+5%",
        label: "than yesterday",
      },
    ],
  },
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Block User",
    path: '/dashboard/block-list',
    value: "$53k",
    footer: [
      {
        color: "text-green-500",
        value: "11",
        label: "Pending",
      },
      {
        color: "text-green-500",
        value: "6",
        label: "Verified",
      },
      {
        color: "text-green-500",
        value: "6",
        label: "Rejected",
      },
    ],
  },
];

export default statisticsCardsData;
