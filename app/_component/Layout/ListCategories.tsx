export default function ListCategories() {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            {['Bộ sạc', 'Pin dự phòng', 'Apple', 'Tai nghe', 'Khác', 'Bộ sạc', 'Pin dự phòng', 'Apple', 'Tai nghe', 'Khác', 'Tai nghe', 'Khác'].map((item, index) => {
                return (
                    <div key={index} className="p-3 text-start cursor-pointer hover:bg-gray-100 hover:text-main rounded-md">
                        {item}
                    </div>
                )
            })}
        </div>
    )
}