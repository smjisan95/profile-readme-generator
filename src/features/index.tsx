import { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    import('./text');
    import('./techs');
    import('./stats');
    import('./socials');
    import('./snake');
    import('./profile-views');
    import('./music');
  }, []);

  return null;
};

export { Features };
