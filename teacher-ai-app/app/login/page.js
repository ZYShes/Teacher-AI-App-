"use client"
import Image from "next/image"
import Link from "next/link"
import { Bot, Smartphone } from "lucide-react"
import { useRouter } from "next/navigation" // 导入 useRouter

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter() // 初始化 router

  const handleLogin = (event) => {
    event.preventDefault()
    // 在这里添加实际的登录逻辑
    // 登录成功后，跳转到仪表盘页面
    router.push("/dashboard")
  }

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col items-center justify-center bg-[#6A67EA] p-10 text-white text-center">
        <div className="space-y-6">
          <Image
            src="/login-image.png" // 确保这个图片在 public 文件夹中
            alt="Person using a laptop"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">让AI助你成长</h1>
            <p className="text-lg text-gray-200">智能教育，因你而变</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-block bg-[#6A67EA] p-4 rounded-full mb-4">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">TeacherA</h2>
            <p className="mt-2 text-sm text-gray-600">你的专属AI教师助理</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {" "}
            {/* 修改这里 */}
            <div className="space-y-4 rounded-md shadow-sm">
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="pl-10 h-12"
                  placeholder="请输入手机号"
                />
              </div>
              <div className="flex items-center gap-4">
                <Input
                  id="verification-code"
                  name="verification-code"
                  type="text"
                  required
                  className="h-12"
                  placeholder="请输入验证码"
                />
                <Button type="button" className="whitespace-nowrap bg-[#6A67EA] hover:bg-[#5856d6] h-12 px-6">
                  获取验证码
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  我已阅读并同意
                  <Link href="#" className="font-medium text-[#6A67EA] hover:text-[#5856d6]">
                    《用户协议》
                  </Link>
                  和
                  <Link href="#" className="font-medium text-[#6A67EA] hover:text-[#5856d6]">
                    《隐私政策》
                  </Link>
                </label>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#6A67EA] py-3 px-4 text-sm font-medium text-white hover:bg-[#5856d6] focus:outline-none focus:ring-2 focus:ring-[#5856d6] focus:ring-offset-2"
              >
                登录/注册
              </Button>
            </div>
            <p className="text-center text-xs text-gray-500">首次登录将自动完成注册</p>
          </form>
        </div>
      </div>
    </div>
  )
}
