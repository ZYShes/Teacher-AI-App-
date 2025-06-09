"use client"

import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const sidebarNavItems = [
  { title: "高中数学函数讲解", time: "14:30", href: "#" },
  { title: "物理力学问题", time: "昨天", href: "#" },
  { title: "化学方程式练习", time: "周二", href: "#" },
]

export default function DashboardLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 space-y-6 border-r border-gray-200 flex flex-col">
        <div className="flex items-center space-x-3">
          <Image
            src="/placeholder.svg?width=40&height=40"
            alt="TeacherA Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-gray-800">TeacherA</span>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-5 w-5" />
          发起新对话
        </Button>

        <nav className="flex-grow space-y-2 overflow-y-auto">
          {sidebarNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {item.title === "高中数学函数讲解"
                    ? "好的，我们来复习一下指数函数的性..."
                    : item.title === "物理力学问题"
                      ? "牛顿第二定律的应用场景包括..."
                      : "让我们来分析一下这个氧化还原反应..."}
                </p>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm border-b border-gray-200">
          <div className="container mx-auto flex justify-between items-center">
            <nav className="flex items-center space-x-6">
              <Link
                href="/dashboard"
                className={`text-lg font-medium pb-1 ${pathname === "/dashboard" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              >
                与TeacherA对话
              </Link>
              <Link
                href="/dashboard/class-management"
                className={`text-lg font-medium pb-1 ${pathname === "/dashboard/class-management" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              >
                班级管理
              </Link>
            </nav>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700">
              登录/注册
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-8">{children}</main>
      </div>
    </div>
  )
}
