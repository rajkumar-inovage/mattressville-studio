import { MdAccountBalanceWallet as icon } from 'react-icons/md';

export default {
  name: 'homeBannerSidebar',
  type: 'document',
  title: 'Home Page Banner Sidebar',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Sidebar Offer Title',
    },
    {
      name: 'sidebarlink',
      type: 'string',
      title: 'Sidebar Offer Link',
    },
    {
      name: 'image',
      title: 'Offer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
};
