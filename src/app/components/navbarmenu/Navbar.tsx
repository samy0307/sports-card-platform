import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import NavmenuItem from "./NavbarMenuItem";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 flex justify-between items-center gap-48">
      <div className="flex-shrink-0">
        <Link href="/">
          <img src="/images/CardBazzar.webp" alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Navigation Menu Section */}
      <div className="flex gap-6 md:gap-10 ">
        <NavmenuItem
          title="Basketball"
          href="/basketball"
          icon="/images/nba.svg"
        />
        <NavmenuItem title="Soccer" href="/soccer" icon="/images/soccer.svg" />
        <NavmenuItem title="Football" href="/football" icon="/images/nfl.svg" />
        <NavmenuItem title="Baseball" href="/baseball" icon="/images/mlb.svg" />
        <NavmenuItem title="Tennis" href="/tennis" icon="/images/tennis.svg" />
        <NavmenuItem title="UFC" href="/ufc" icon="/images/ufc.svg" />
        <NavmenuItem title="Racing" href="/racing" icon="/images/racing.svg" />
      </div>

      {/* Search Field Section */}
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/3 p-2 border rounded-md"
        />
      </div>

      {/* Login Section */}
      <div className="flex-shrink-0">
        <ClerkProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkProvider>
      </div>
    </div>
  );
}
