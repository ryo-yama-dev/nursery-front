import Link from "next/link"
import clsx from "clsx"

const TopButton = ({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) => {
  return (
    <button
      className={clsx(
        "h-80 w-80 rounded-md border border-teal-500 text-3xl ",
        color,
      )}
    >
      {children}
    </button>
  )
}

export default function TopPage() {
  return (
    <div className="h-full w-full">
      <div className="my-2 flex items-center justify-center p-2">
        <p className="py-4 text-4xl">保育園情報管理システム</p>
      </div>
      <div className="mt-4 flex items-center justify-evenly">
        <Link href="/employee">
          <TopButton color="bg-cyan-100 hover:bg-cyan-300">勤怠登録</TopButton>
        </Link>
        <Link href="/child">
          <TopButton color="bg-lime-100 hover:bg-lime-300">
            登退園登録
          </TopButton>
        </Link>
        <Link href="/manage">
          <TopButton color="bg-amber-100 hover:bg-amber-300">
            従業員管理
          </TopButton>
        </Link>
      </div>
    </div>
  )
}
