import { redirect } from 'next/navigation'

export default function HomePage() {
  // 将来这里可以加入逻辑判断用户是否已登录
  // 如果已登录，则重定向到 /dashboard，否则到 /login
  redirect('/login')
}