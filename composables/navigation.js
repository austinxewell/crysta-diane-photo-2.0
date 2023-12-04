export const useNavigationItems = () =>
  useState('menu-items', () => [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
      link: '/',
      children: []
    },
    {
      id: 2,
      name: 'Gallery',
      icon: 'photo_library',
      link: '/gallery',
      children: []
    },
    {
      id: 3,
      name: 'Services',
      icon: 'photo_camera',
      link: '/services',
      children: [
        {
          id: 1,
          name: 'Wedding',
          icon: 'favorite',
          link: '/services/wedding'
        },
        {
          id: 2,
          name: 'Maternity',
          icon: 'pregnant_woman',
          link: '/services/maternity'
        },
        {
          id: 3,
          name: 'Head Shots',
          icon: 'person',
          link: '/services/individual-headshots'
        },
        {
          id: 4,
          name: 'Groups',
          icon: 'groups',
          link: '/services/family-groups'
        },
        {
          id: 5,
          name: 'Couples',
          icon: 'group',
          link: '/services/couples'
        },
        {
          id: 6,
          name: 'Seniors',
          icon: 'school',
          link: '/services/seniors'
        }
      ]
    },
    {
      id: 4,
      name: 'Contact',
      icon: 'contact_page',
      link: '/contact',
      children: []
    }
  ]);

export const useNavigationToggle = () => useState('expanded-toggle', () => true);

export const useParentToggle = () => useState('parent-toggle', () => '');

export const useAdminParentToggle = () => useState('admin-parent-toggle', () => '');
