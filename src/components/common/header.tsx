import { SquarePlay } from 'lucide-react';
import NavLink from './nav-link';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap shrink-0">
          <SquarePlay className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            YT Summariser
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignInButton>
          <NavLink href="/#dashboard">Your Summarize</NavLink>
        </SignInButton>
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        <SignInButton>
          <div className="flex gap-2 items-center">
            {/* <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div> */}
            <SignInButton>
              <UserButton />
            </SignInButton>
          </div>
        </SignInButton>
        <SignUpButton>
          <NavLink href="/sign-in">Sign In</NavLink>
        </SignUpButton>
      </div>
    </nav>
  );
}
