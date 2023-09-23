import { Header } from "components/common"

export default function ManagePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="mt-2 w-full pt-14">{children}</div>
    </div>
  )
}
