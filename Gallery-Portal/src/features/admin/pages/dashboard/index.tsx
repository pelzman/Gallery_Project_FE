
import Table from './components/Table'
import AddPhotoButton from './components/AddPhotoButton'
const Dashboard = () => {
    return (
        <div className='mt-[50px]'>
            <div className='text-end mb-[20px] pb-[20px]'>
                <AddPhotoButton />
            </div>
            <div className='overflow-y-auto'>
                <Table />
            </div>

        </div>
    )
}

export default Dashboard