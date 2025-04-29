export default function Card({ title, content, bgColor = 'bg-slate-800' }) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor} border border-slate-700 hover:shadow-lg transition-shadow`}>
      <h3 className="text-lg font-semibold mb-2 text-cyan-300">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  )
}