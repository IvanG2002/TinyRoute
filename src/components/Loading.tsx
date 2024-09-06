
function Loading() {
    return (
        <div className='flex gap-1 flex-col items-center'>
            <img className="h-4 w-4 animate-spin" src="./loading.svg" alt="" />
            <span>Loading...</span>
        </div>
    )
}

export default Loading