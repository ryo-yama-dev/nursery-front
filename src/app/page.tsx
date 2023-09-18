import { Button } from "components/common"
import Link from "next/link"

export default function TopPage() {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <Link href="/employee">
        <Button>勤怠登録</Button>
      </Link>
      <Link href="/child">
        <Button>登退園登録</Button>
      </Link>
      <Link href="/manage">
        <Button>従業員管理</Button>
      </Link>
    </div>
  )
}
