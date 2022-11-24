import { useQuery } from "react-query"

const useFetch = (url, key) => {
    const { data = [], refetch, isLoading } = useQuery({
        queryKey: key,
        queryFn: () => fetch(url)
            .then(res => res.json())
            .then(data => {
                return data
            })
    })
    return { data, refetch, isLoading }
}
export default useFetch