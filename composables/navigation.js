export const useNavigationItems = () =>
  useState('menu-items', () => [
    {
      id: 1,
      name: 'Home',
      shortName: 'Home',
      icon: 'home',
      link: '/',
      children: []
    },
    {
      id: 2,
      name: 'Gallery',
      shortName: 'Gallery',
      icon: 'photo_library',
      link: '/gallery',
      children: []
    },
    {
      id: 3,
      name: 'Services',
      shortName: 'Services',
      icon: 'photo_camera',
      link: '/services',
      children: [
        {
          id: 1,
          name: 'Wedding',
          shortName: 'Wedding',
          icon: 'favorite',
          link: '/services/wedding'
        },
        {
          id: 2,
          name: 'Maternity',
          shortName: 'Maternity',
          icon: 'pregnancy',
          link: '/services/maternity'
        },
        {
          id: 3,
          name: 'Individual/Head Shots',
          shortName: 'Individual',
          icon: 'person',
          link: '/services/individual-headshots'
        },
        {
          id: 4,
          name: 'Family/Groups',
          shortName: 'Groups',
          icon: 'groups',
          link: '/services/family-groups'
        },
        {
          id: 5,
          name: 'Couples',
          shortName: 'Couples',
          icon: 'group',
          link: '/services/couples'
        },
        {
          id: 6,
          name: 'Seniors',
          shortName: 'Seniors',
          icon: 'school',
          link: '/services/seniors'
        },
        {
          id: 7,
          name: 'School Dance',
          shortName: 'Dance',
          icon: 'music_note',
          link: '/services/schooldance'
        }
      ]
    },
    {
      id: 4,
      name: 'Contact',
      shortName: 'Contact',
      icon: 'contact_page',
      link: '/contact',
      children: []
    }
  ]);

export const useNavigationToggle = () => useState('expanded-toggle', () => true);
