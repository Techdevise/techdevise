import { ArrowUpRight } from "lucide-react"

export default function ServiceCard({ title, description, bgColor, imagePath, fullWidth = false }) {
  return (
    <div className={`${fullWidth ? "w-full" : "flex-1"} rounded-3xl ${bgColor} overflow-hidden relative`}>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-6 max-w-md">{description}</p>

        <button className="flex items-center font-medium">
          More information
          <span className="ml-2 bg-white rounded-full p-1">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      <div className={`mt-4 ${fullWidth ? "flex justify-end" : ""}`}>
        <div className={`${fullWidth ? "w-1/3 mr-8" : "w-full"} h-48 relative`}>
          <img
            src={imagePath || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
