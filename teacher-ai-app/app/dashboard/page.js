import { Search, FileText, BookOpen, Edit3 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">我是你的AI教师助理TeacherA，可以帮你备课</h1>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="输入你想要讲解的知识点或试题，自动生成对应的可视化内容"
            className="w-full pl-12 pr-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-base h-14"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">上传试题生成</CardTitle>
            <FileText className="h-8 w-8 text-blue-600 bg-blue-100 p-1.5 rounded-md" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">支持PNG、JPG等图片格式</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">从知识点中选择</CardTitle>
            <BookOpen className="h-8 w-8 text-blue-600 bg-blue-100 p-1.5 rounded-md" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">按知识点生成合适的内容</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">从班级高频错题中选择</CardTitle>
            <Edit3 className="h-8 w-8 text-blue-600 bg-blue-100 p-1.5 rounded-md" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">针对性查漏补缺</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
