export default function ProductDetailSkeleton() {
    return (
        <div className="flex-row border-2 border-pink-200 rounded-lg p-4 m-4 bg-amber-50 max-w-xl w-full animate-pulse">
            <div className="bg-gray-200 h-[300px] w-[300px] rounded mb-4 mx-auto" />
            <div className="bg-gray-200 h-8 w-3/4 rounded mb-3" />
            <div className="bg-gray-200 h-6 w-1/4 rounded mb-2" />
            <div className="bg-gray-200 h-4 w-1/3 rounded mb-4" />
            <div className="bg-gray-200 h-4 w-full rounded mb-1" />
            <div className="bg-gray-200 h-4 w-full rounded mb-1" />
            <div className="bg-gray-200 h-4 w-5/6 rounded mb-4" />
            <div className="bg-gray-200 h-10 w-full rounded" />
        </div>
    );
}