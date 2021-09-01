export default function getMovie(){
    return (
        fetch('https://api.themoviedb.org/3/discover/movie', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdlMzVjMWNjNWMwZDE2YjYwMjE3M2NiMDhjNzU5YyIsInN1Yi' +
                    'I6IjYxMmY0YTM2ZmJlMzZmMDA0MzQyY2UzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EuKtgdRq7Zl8wxRTrH' +
                    'xm3XvOpLGAIdtG51YIuTNeYc',
            }
        })

            .then(response => response.json())

    )

}
