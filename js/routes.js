var routes=[ // Index page
  {
      path: '/', url: './index.html', name: 'home',
  }
  ,
  {
      path: '/about/', url: './pages/about.html', name: 'about',
  }
  ,
  {
      path: '/login/', componentUrl: './pages/login.html', name: 'login',
  }
  ,
  {
      path: '/register/', componentUrl: './pages/register.html', name: 'login',
  }
  ,
  {
      path: '/home/', componentUrl: './pages/home.html', name: 'user-home',
  }
  ,
  {
      path: '/settings/', componentUrl: './pages/settings.html', name: 'settings',
  },
  {
      path: '/find-friends/', componentUrl: './pages/find.html', name: 'find_friends',
  },
  {
      path: '/user-info/', componentUrl: './pages/user-info.html', name: 'user_info',
  }
  ,
  {
      path: '/requests/', componentUrl: './pages/requests.html', name: 'friend_request',
  },
  {
      path: '/requests-info/', componentUrl: './pages/requests-info.html', name: 'request_info',
  }
  ,
  {
      path: '/submit-post/', componentUrl: './pages/new_post.html', name: 'submit_post',
  }
  ,
  {
      path: '/year-book/', componentUrl: './pages/yearbook.html', name: 'yearbook',
  }
  
  , // Default route (404 page). MUST BE THE LAST
  {
      path: '(.*)', url: './pages/404.html',
  }
  
  ];