import { BaseProps } from "../types";
import Profile from "../components/Profile";
import { useState } from "react";

export default function Propsdemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction: <input type="checkbox" checked={showHorizontal} onChange={() => setShowHorizontal(!showHorizontal)} />
      <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
      <hr />
      <Profile name="Big Bingus" email="binguscore@email.com" isActive={true} singleLine={showHorizontal} />
      <hr />
      <Profile name="Bongus Bunghole" email="bongussy@email.com" isActive={false} singleLine={showHorizontal} />
      {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
    </>
  );
}
