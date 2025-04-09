import { SignOut } from "@/components/SignOut";
import { getUserInformation } from "@/utils/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const information = await getUserInformation();
  return (
    <>
      <header className="p-2 flex justify-between">
        <p>{information.name}</p>
        <SignOut />
      </header>
      {children}
    </>
  );
}
