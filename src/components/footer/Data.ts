import { ReactComponent as Instagram } from '@assets/social/Instagram.svg';
import { ReactComponent as LinkedIn } from '@assets/social/LinkedIn.svg';
import { ReactComponent as TikTok } from '@assets/social/TikTok.svg';
import { ReactComponent as Youtube } from '@assets/social/YouTube.svg';
import { ReactComponent as Twitter } from '@assets/social/Twitter.svg';
import { ReactComponent as Facebook } from '@assets/social/FacebookIcon.svg';
import { ReactComponent as Discord } from '@assets/social/Discord.svg';
import { ReactComponent as Medium } from '@assets/social/MediumIcon.svg';
import { ReactComponent as Reddit } from '@assets/social/RedditIcon.svg';

interface SocialMediaLink {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    svg: Twitter,
    href: 'https://twitter.com/Tiptop_Official',
  },
  {
    svg: Facebook,
    href: 'https://www.facebook.com/TipTopStep',
  },
  {
    svg: LinkedIn,
    href: 'https://www.linkedin.com/company/tip-top-sneakers-pte-ltd/',
  },
  {
    svg: Discord,
    href: 'https://discord.gg/tiptop',
  },
  {
    svg: Instagram,
    href: 'https://instagram.com/tiptop_io/',
  },
  {
    svg: TikTok,
    href: 'https://tiktok.com/@tiptop_io',
  },
  {
    svg: Youtube,
    href: 'https://youtube.com/@tiptop_io/featured',
  },
  {
    svg: Medium,
    href: 'https://medium.com/@tiptop_io',
  },
  {
    svg: Reddit,
    href: 'https://www.reddit.com/r/TipTopOfficial/',
  },
];

export const linkData = [
  { type: 'SimpleLink', href: 'https://m.tiptop.io/', children: 'Marketplace' },
  {
    type: 'SimpleLink',
    href: 'https://docs.tiptop.io/zItmPiWfNudypEr4I92o/',
    children: 'How To Play',
  },
  {
    type: 'SimpleLink',
    href: 'https://opensea.io/collection/tiptop-sneakers',
    children: 'OpenSea',
  },
  { type: 'HashLink', href: '#faq', children: 'FAQ' },
  { type: 'SimpleLink', href: '/TipTop_Whitepaper.pdf', children: 'Whitepaper' },
];
