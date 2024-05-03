import BasicTable from '../components/BasicTable'
import { useGetUsersQuery } from '../store/usersApi'

const Task1 = () => {

  const { data, isLoading } = useGetUsersQuery();

  if (isLoading) return <h1> Loading ... </h1>

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]
  return <BasicTable data={data} columns={movieColumns} />
}

export default Task1